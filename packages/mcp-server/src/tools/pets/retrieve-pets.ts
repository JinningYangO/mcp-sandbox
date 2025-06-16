// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'mcp-sandbox-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import McpSandboxAPI from 'mcp-sandbox-api';

export const metadata: Metadata = {
  resource: 'pets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/pets/{id}',
  operationId: 'find pet by id',
};

export const tool: Tool = {
  name: 'retrieve_pets',
  description: 'Returns a user based on a single ID, if the user does not have access to the pet',
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
  return asTextContentResult(await client.pets.retrieve(id));
};

export default { metadata, tool, handler };
