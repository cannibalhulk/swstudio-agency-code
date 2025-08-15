import React from 'react'
import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import CopyablePrompt from '@/components/AI-Prompts/copyable-prompt';
import { getMarkdownContent } from '@/lib/markdown';

export const metadata: Metadata = {
  title: "AI Prompts | Shukur Web Studio - Your Digital Web Agency",
  description: "Shukur Web Studio: Your trusted digital web agency. We create stunning, functional websites tailored to your business needs. Expert design, development, and digital solutions to boost your online presence.",
};

const AIPrompts = () => {
    let content;
    try {
        content = getMarkdownContent('ai-humanizer-prompt');
        if (!content) {
            throw new Error('Content is empty');
        }
    } catch (error) {
        console.error('Failed to load markdown content:', error);
        content = 'Failed to load content. Please try again later. Error: ' + (error instanceof Error ? error.message : String(error));
    }
  return (
    <main>
        <Breadcrumb pageName="AI Prompts" />
            <section className="bg-white py-20 dark:bg-dark-2 lg:py-[110px]">
                <div className="container mx-auto">
                    <h2 id="ai-humanizer-prompt" className="text-center text-2xl font-bold">ChatGPT AI Humanizer Prompt</h2>
                    <CopyablePrompt 
                        title={undefined}
                        content={content}
                    />
                </div>
            </section>
    </main>
  )
}

export default AIPrompts