import fs from 'fs';
import path from 'path';

export function getMarkdownContent(filename: string): string {
  try {
    const filePath = path.join(process.cwd(), 'public', 'markdown', `${filename}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error('Error loading markdown:', error);
    throw error;
  }
}
