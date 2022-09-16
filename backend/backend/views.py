import json
from django.views.generic.base import TemplateView
from django.views.generic import View
from django.http import JsonResponse
from chatterbot import ChatBot
from chatterbot.ext.django_chatterbot import settings
from chatterbot.trainers import ChatterBotCorpusTrainer

class ChatterBotApiView(View):
    """
    Provide an API endpoint to interact with ChatterBot.
    """

    chatterbot = ChatBot(**settings.CHATTERBOT)

    def get(self, request, *args, **kwargs):
        """
        Return a response to the statement in the posted data.
        * The JSON data should contain a 'text' attribute.
        """
        input_data = json.loads(request.body.decode('utf-8'))
        bot=ChatBot('Test',  
	        database_uri='sqlite:///database.db',
            read_only=True,
            storage_adapter='chatterbot.storage.SQLStorageAdapter',
            preprocessors=[
                'chatterbot.preprocessors.clean_whitespace',
            ],
            logic_adapters=[
                {
                'import_path': 'chatterbot.logic.BestMatch',
                'default_response': 'I am sorry, but I do not understand.'
                },
                'chatterbot.logic.MathematicalEvaluation'
            ],
        )
        trainer = ChatterBotCorpusTrainer(bot)
        trainer.train("chatterbot.corpus.english")
        if 'text' not in input_data:
            return JsonResponse({
                'text': [
                    'The attribute "text" is required.'
                ]
            }, status=400)

        response = bot.get_response(input_data)
        print(input_data["text"])
        response_data = response.serialize()

        return JsonResponse(response_data, status=200)
