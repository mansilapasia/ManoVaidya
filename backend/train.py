from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
chatbot = ChatBot('Chatterbot',
trainer='chatterbot.trainers.CorpusTrainer', 
storage_adapter='chatterbot.storage.SQLStorageAdapter',
database_uri='sqlite:///databas.db')

#chatbot = ChatBot(**settings.CHATTERBOT)
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train(
    "./chatbot/manovaidya.yml"
)