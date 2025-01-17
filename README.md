# **Gastro**

**Gastro** is a culinary assistant application that interprets user inputs to extract ingredients from a prompt, leveraging the power of **Copilot Coagents**. Depending on the requirements, it either utilizes the _Spoonacular API_ to enhance the response or processes the query directly, serving customized culinary advice through an intelligent agent.

## **Table of Contents**

- [Demo](#demo)
- [Usage](#usage)
- [Running the Agent](#running-the-agent)
- [Running the UI](#running-the-ui)
- [Langraph Details](#langraph-details)
- [Features](#features)
- [License](#license)
- [Event](#event)

## **Demo**

Loading...

## **Usage**

1. **Create a virtual environment:**

   ```bash
   python -m venv venv
   ```

2. **Activate the virtual environment:**

   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. **Install the required dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server:**
   ```bash
   uvicorn main:app --host 127.0.0.1 --port 8000 --reload
   ```

## **Running the UI**

1. **Navigate to the UI directory:**

   ```bash
   cd gastro
   ```

2. **Install UI dependencies:**

   ```bash
   bun install
   ```

3. **Start the development server for the UI:**
   ```bash
   bun run dev
   ```

## **Langraph Details**

For an in-depth explanation of the **Langraph** used in **Gastro**, navigate to the notebook located at:

```
notebooks/Gastro-LangGraph.ipynb
```

This notebook provides detailed insights into how the Langraph is structured and how it powers the recipe generation logic in **Gastro**.

## **Environmental Variables**

### For Frontend

```bash
OPENAI_API_KEY=your-nagai-api-key
OPENAI_BASE_URL=https://api.naga.ac/v1
REMOTE_ACTION_BASE_URL=http://127.0.0.1:8000
```

### For Backend

```
PORT=8000
OPENAI_API_KEY=your-nagaai-api-key
OPENAI_BASE_URL=https://api.naga.ac/v1/
SPOONACULAR_API_KEY=your-spoonacular-api-key
APP_ENV=development
```

## **Features**

- **Ingredient Extraction**: Analyzes the user's input to identify and extract key ingredients.
- **API Integration**: Optionally uses the _Spoonteny API_ for extended functionality, such as fetching recipes or nutritional information.
- **Direct Processing**: Can operate without external APIs to provide immediate responses based on a built-in knowledge base.
- **User-Friendly Interface**: Simple command-line interface for easy interaction.

## **License**

Distributed under the MIT License. See `LICENSE` for more information.

## **Event**

This project was developed for the _[Quira](https://quira.sh/?utm_source=susheel) Quest 24_, sponsored by **[Copilotkit](https://www.copilotkit.ai/)**. It aims to showcase innovative uses of AI in everyday applications, promoting open-source collaboration and development.
