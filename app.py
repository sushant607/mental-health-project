from flask import Flask, request, jsonify
from flask_cors import CORS
from ctransformers import AutoModelForCausalLM

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load your model
model_path = input('Enter the model name :')
llm = AutoModelForCausalLM.from_pretrained(model_path)
llm = AutoModelForCausalLM.from_pretrained("model") 
system_message="You are a helpful and joyous mental therapy assistant. Always answer as helpfully and cheerfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content.Please ensure that your responses are socially unbiased and positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information. Do not assume anything. "



@app.route('/predict', methods=['POST'])
def predict():
    try:
        print('hello')
        data = request.get_json()
        message = data.get('message', '')
        print(message)
        # Generate prediction using your model
        prompt = f"[INST] <<SYS>>\n{system_message}\n<</SYS>>\n\n {message} [/INST]"
        predicted_message = llm(message)  # Replace with your model's logic
        print(predicted_message)
        return jsonify({'predicted_message': predicted_message})

    except Exception as e:
        print('Error predicting message:', str(e))
        return jsonify({'error': 'Failed to predict message'}), 500

if __name__ == '__main__':
    app.run(port=5001)
