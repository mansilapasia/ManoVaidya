from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

chatbot = ChatBot('Chatterbot',
trainer='chatterbot.trainers.CorpusTrainer', 
storage_adapter='chatterbot.storage.SQLStorageAdapter',
database_uri='sqlite:///database.db')

trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train(
    "chatterbot.corpus.english",
)
