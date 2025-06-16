// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'mcp-sandbox-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import McpSandboxAPI from 'mcp-sandbox-api';

export const metadata: Metadata = {
  resource: 'pets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/pets/{id}',
  operationId: 'deletePet',
};

export const tool: Tool = {
  name: 'delete_pets',
  description: 'deletes a single pet based on the ID supplied',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: McpSandboxAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.pets.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
