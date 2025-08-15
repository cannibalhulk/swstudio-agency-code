"use client"
import React from 'react'

export default function CopyablePrompt({ title, content }: { title: string | undefined, content: string }) {
  return (
    <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        {title && <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>}
        <button
          onClick={() => {
            navigator.clipboard.writeText(content);
          }}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Copy
        </button>
      </div>
      <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
        <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-mono">
          {content}
        </p>
      </div>
    </div>
  )
}
