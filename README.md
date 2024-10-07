# Martian Example

Import Markdown into Notion with Equations

An example usage of [Martian](https://github.com/tryfabric/martian) to import a markdown file with equations into Notion.

## Usage

### Set up Notion API

Follow the instructions at [Getting Started](https://developers.notion.com/docs/create-a-notion-integration#getting-started) to create your integration, get your API key and connect your integration to a page.

### Clone repo

```
# Clone this repository locally
git clone https://github.com/daishironishida/Martian-Example

# Switch into this project
cd Martian-Example

# Install the dependencies
npm install
```


### Environment variables

In your .env file, add the following variables:

```
NOTION_KEY=<your-notion-api-key>
NOTION_PAGE_ID=<parent-page-id>
```

See .env.example as a reference.

### Run

Write your content into a file named input.txt and run

```
npm start
```