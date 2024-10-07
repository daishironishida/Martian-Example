import { Client } from "@notionhq/client"
import { config } from "dotenv"
import {markdownToBlocks, markdownToRichText} from '@tryfabric/martian';
import * as fs from 'fs';

config()

const pageId = process.env.NOTION_PAGE_ID
const apiKey = process.env.NOTION_API_KEY

const notion = new Client({ auth: apiKey })

/* 
---------------------------------------------------------------------------
*/

/**
 * Resources:
 * - Appending block children endpoint (notion.blocks.children.append(): https://developers.notion.com/reference/patch-block-children)
 * - Working with page content guide: https://developers.notion.com/docs/working-with-page-content
 */

async function main() {
  const filePath = 'input.txt';
  const content = fs.readFileSync(filePath);
  const blocks = markdownToBlocks(content);
  const blockId = pageId // Blocks can be appended to other blocks *or* pages. Therefore, a page ID can be used for the block_id parameter
  const newHeadingResponse = await notion.blocks.children.append({
    block_id: blockId,
    // Pass an array of blocks to append to the page: https://developers.notion.com/reference/block#block-type-objects
    children: blocks
  })

  // Print the new block(s) response
  console.log(newHeadingResponse)
}

main()
