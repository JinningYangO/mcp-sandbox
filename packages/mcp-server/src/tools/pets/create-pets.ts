// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'mcp-sandbox-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import McpSandboxAPI from 'mcp-sandbox-api';

export const metadata: Metadata = {
  resource: 'pets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/pets',
  operationId: 'addPet',
};

export const tool: Tool = {
  name: 'create_pets',
  description: 'Creates a new pet in the store. Duplicates are allowed',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      tag: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: McpSandboxAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.pets.create(body));
};

export default { metadata, tool, handler };
