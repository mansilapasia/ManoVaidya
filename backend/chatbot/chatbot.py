from chatterbot.trainers import ListTrainer
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
import pickle
import chatterbot
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
trainer.train("./manovaidya.yml")

#filename = 'chatbot.pickle'
#pickle.dump(bot, open(filename, 'wb'))

while True:
    request=input('You: ')
    response=bot.get_response(request)
    print('bot:',response)
