// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Represents permission scope values.
 */
export enum PermissionScopeValues {
  /**
   * Values which set permission scope applicable to control plane related operations.
   */
   SCOPE_ACCOUNT_READ_VALUE = 0x0001,
   SCOPE_ACCOUNT_LIST_DATABASES_VALUE = 0x0002,
   SCOPE_DATABASE_READ_VALUE = 0x0004,
   SCOPE_DATABASE_READ_OFFER_VALUE = 0x0008,
   SCOPE_DATABASE_LIST_CONTAINERS_VALUE = 0x0010,
   SCOPE_CONTAINER_READ_VALUE = 0x0020,
   SCOPE_CONTAINER_READ_OFFER_VALUE = 0x0040,

   SCOPE_ACCOUNT_CREATE_DATABASES_VALUE = 0x0001,
   SCOPE_ACCOUNT_DELETE_DATABASES_VALUE = 0x0002,
   SCOPE_DATABASE_DELETE_VALUE = 0x0004,
   SCOPE_DATABASE_REPLACE_OFFER_VALUE = 0x0008,
   SCOPE_DATABASE_CREATE_CONTAINERS_VALUE = 0x0010,
   SCOPE_DATABASE_DELETE_CONTAINERS_VALUE = 0x0020,
   SCOPE_CONTAINER_REPLACE_VALUE = 0x0040,
   SCOPE_CONTAINER_DELETE_VALUE = 0x0080,
   SCOPE_CONTAINER_REPLACE_OFFER_VALUE = 0x0100,

   SCOPE_ACCOUNT_READ_ALL_ACCESS_VALUE = 0xFFFF,
   SCOPE_DATABASE_READ_ALL_ACCESS_VALUE =
   PermissionScopeValues.SCOPE_DATABASE_READ_VALUE
    | PermissionScopeValues.SCOPE_DATABASE_READ_OFFER_VALUE
    | PermissionScopeValues.SCOPE_DATABASE_LIST_CONTAINERS_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_READ_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_READ_OFFER_VALUE,

   SCOPE_CONTAINERS_READ_ALL_ACCESS_VALUE =
    PermissionScopeValues.SCOPE_CONTAINER_READ_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_READ_OFFER_VALUE,

   SCOPE_ACCOUNT_WRITE_ALL_ACCESS_VALUE = 0xFFFF,
   SCOPE_DATABASE_WRITE_ALL_ACCESS_VALUE = 
    PermissionScopeValues.SCOPE_DATABASE_DELETE_VALUE
    | PermissionScopeValues.SCOPE_DATABASE_REPLACE_OFFER_VALUE
    | PermissionScopeValues.SCOPE_DATABASE_CREATE_CONTAINERS_VALUE
    | PermissionScopeValues.SCOPE_DATABASE_DELETE_CONTAINERS_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_REPLACE_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_DELETE_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_REPLACE_OFFER_VALUE,

   SCOPE_CONTAINERS_WRITE_ALL_ACCESS_VALUE =
    PermissionScopeValues.SCOPE_CONTAINER_REPLACE_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_DELETE_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_REPLACE_OFFER_VALUE,

  /**
   * Values which set permission scope applicable to data plane related operations.
   */
   SCOPE_CONTAINER_EXECUTE_QUERIES_VALUE = 0x00000001,
   SCOPE_CONTAINER_READ_FEEDS_VALUE = 0x00000002,
   SCOPE_CONTAINER_READ_STORED_PROCEDURES_VALUE = 0x00000004,
   SCOPE_CONTAINER_READ_USER_DEFINED_FUNCTIONS_VALUE = 0x00000008,
   SCOPE_CONTAINER_READ_TRIGGERS_VALUE = 0x00000010,
   SCOPE_CONTAINER_READ_CONFLICTS_VALUE = 0x00000020,
   SCOPE_ITEM_READ_VALUE = 0x00000040,
   SCOPE_STORED_PROCEDURE_READ_VALUE = 0x00000080,
   SCOPE_USER_DEFINED_FUNCTION_READ_VALUE = 0x00000100,
   SCOPE_TRIGGER_READ_VALUE = 0x00000200,

   SCOPE_CONTAINER_CREATE_ITEMS_VALUE = 0x00000001,
   SCOPE_CONTAINER_REPLACE_ITEMS_VALUE = 0x00000002,
   SCOPE_CONTAINER_UPSERT_ITEMS_VALUE = 0x00000004,
   SCOPE_CONTAINER_DELETE_ITEMS_VALUE = 0x00000008,
   SCOPE_CONTAINER_CREATE_STORED_PROCEDURES_VALUE = 0x00000010,
   SCOPE_CONTAINER_REPLACE_STORED_PROCEDURES_VALUE = 0x00000020,
   SCOPE_CONTAINER_DELETE_STORED_PROCEDURES_VALUE = 0x00000040,
   SCOPE_CONTAINER_EXECUTE_STORED_PROCEDURES_VALUE = 0x00000080,
   SCOPE_CONTAINER_CREATE_TRIGGERS_VALUE = 0x00000100,
   SCOPE_CONTAINER_REPLACE_TRIGGERS_VALUE = 0x00000200,
   SCOPE_CONTAINER_DELETE_TRIGGERS_VALUE = 0x00000400,
   SCOPE_CONTAINER_CREATE_USER_DEFINED_FUNCTIONS_VALUE = 0x00000800,
   SCOPE_CONTAINER_REPLACE_USER_DEFINED_FUNCTIONS_VALUE = 0x00001000,
   SCOPE_CONTAINER_DELETE_USER_DEFINED_FUNCTIONS_VALUE = 0x00002000,
   SCOPE_CONTAINER_DELETE_CONFLICTS_VALUE = 0x00004000,
   SCOPE_ITEM_REPLACE_VALUE = 0x00010000,
   SCOPE_ITEM_UPSERT_VALUE = 0x00020000,
   SCOPE_ITEM_DELETE_VALUE = 0x00040000,
   SCOPE_STORED_PROCEDURE_REPLACE_VALUE = 0x00100000,
   SCOPE_STORED_PROCEDURE_DELETE_VALUE = 0x00200000,
   SCOPE_STORED_PROCEDURE_EXECUTE_VALUE = 0x00400000,
   SCOPE_USER_DEFINED_FUNCTION_REPLACE_VALUE = 0x00800000,
   SCOPE_USER_DEFINED_FUNCTION_DELETE_VALUE = 0x01000000,
   SCOPE_TRIGGER_REPLACE_VALUE = 0x02000000,
   SCOPE_TRIGGER_DELETE_VALUE = 0x04000000,

   SCOPE_CONTAINER_READ_ALL_ACCESS_VALUE = 0xFFFFFFFF,
   SCOPE_ITEM_READ_ALL_ACCESS_VALUE =
    PermissionScopeValues.SCOPE_CONTAINER_EXECUTE_QUERIES_VALUE
    | PermissionScopeValues.SCOPE_ITEM_READ_VALUE,
    SCOPE_CONTAINER_WRITE_ALL_ACCESS_VALUE = 0xFFFFFFFF,
    SCOPE_ITEM_WRITE_ALL_ACCESS_VALUE =
    PermissionScopeValues.SCOPE_CONTAINER_CREATE_ITEMS_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_REPLACE_ITEMS_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_UPSERT_ITEMS_VALUE
    | PermissionScopeValues.SCOPE_CONTAINER_DELETE_ITEMS_VALUE
    | PermissionScopeValues.SCOPE_ITEM_REPLACE_VALUE
    | PermissionScopeValues.SCOPE_ITEM_UPSERT_VALUE
    | PermissionScopeValues.SCOPE_ITEM_DELETE_VALUE,

    NONE_VALUE = 0
} 