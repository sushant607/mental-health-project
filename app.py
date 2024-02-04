#!pip install -q accelerate==0.21.0 peft==0.4.0 bitsandbytes==0.40.2 transformers==4.31.0
from flask import Flask, request, jsonify
from flask_cors import CORS
from ctransformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
)
import torch

model_path="model_2"
# use_4bit = True
# bnb_4bit_compute_dtype = "float16"
# bnb_4bit_quant_type = "nf4"
# use_nested_quant = False
# device_map = {"": 0}

# compute_dtype = getattr(torch, bnb_4bit_compute_dtype)
# bnb_config = BitsAndBytesConfig(
#     load_in_4bit=use_4bit,
#     bnb_4bit_quant_type=bnb_4bit_quant_type,
#     bnb_4bit_compute_dtype=compute_dtype,
#     bnb_4bit_use_double_quant=use_nested_quant,
# )
# model = AutoModelForCausalLM.from_pretrained(
#     model_path,
#     # quantization_config=bnb_config,
#     # device_map=device_map
# )
# tokenizer = AutoTokenizer.from_pretrained(model_path)
#pipe = pipeline(task="text-generation", model=model, tokenizer=tokenizer,max_new_tokens=200)
system_message="You are a helpful and joyous mental therapy assistant. Always answer as helpfully and cheerfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content.Please ensure that your responses are socially unbiased and positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information. Do not assume anything. "


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/predict', methods=['POST'])
def predict():
    try:
        print('hello')
        data = request.get_json()
        message = data.get('message', '')
        print(message)
        # Generate prediction using your model
        prompt = f"[INST] <<SYS>>\n{system_message}\n<</SYS>>\n\n {message} [/INST]"
        # predicted_message = model(prompt)  
        predicted_message=message
        print(predicted_message)
        return jsonify({'predicted_message': predicted_message})

    except Exception as e:
        print('Error predicting message:', str(e))
        return jsonify({'error': 'Failed to predict message'}), 500

if __name__ == '__main__':
    app.run(port=5001)
