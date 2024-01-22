from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

class SentimentAnalyzer:
    def __init__(self):
        # You may want to load a pre-trained model or initialize one here
        self.vectorizer = TfidfVectorizer(max_features=5000)
        self.model = MultinomialNB()

    def train_model(self, X_train, y_train):
        X_train_tfidf = self.vectorizer.fit_transform(X_train)
        self.model.fit(X_train_tfidf, y_train)

    def predict_sentiment(self, comments):
        comments_tfidf = self.vectorizer.transform(comments)
        predictions = self.model.predict(comments_tfidf)
        return predictions
