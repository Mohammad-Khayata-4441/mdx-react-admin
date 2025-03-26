/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardRouteImport } from './routes/_dashboard/route'
import { Route as DashboardIndexImport } from './routes/_dashboard/index'
import { Route as DashboardUsersIndexImport } from './routes/_dashboard/users/index'
import { Route as DashboardProductsIndexImport } from './routes/_dashboard/products/index'

// Create/Update Routes

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardUsersIndexRoute = DashboardUsersIndexImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardProductsIndexRoute = DashboardProductsIndexImport.update({
  id: '/products/',
  path: '/products/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_dashboard': {
      id: '/_dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard/': {
      id: '/_dashboard/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/products/': {
      id: '/_dashboard/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof DashboardProductsIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/users/': {
      id: '/_dashboard/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof DashboardUsersIndexImport
      parentRoute: typeof DashboardRouteImport
    }
  }
}

// Create and export the route tree

interface DashboardRouteRouteChildren {
  DashboardIndexRoute: typeof DashboardIndexRoute
  DashboardProductsIndexRoute: typeof DashboardProductsIndexRoute
  DashboardUsersIndexRoute: typeof DashboardUsersIndexRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardIndexRoute: DashboardIndexRoute,
  DashboardProductsIndexRoute: DashboardProductsIndexRoute,
  DashboardUsersIndexRoute: DashboardUsersIndexRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof DashboardRouteRouteWithChildren
  '/': typeof DashboardIndexRoute
  '/products': typeof DashboardProductsIndexRoute
  '/users': typeof DashboardUsersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof DashboardIndexRoute
  '/products': typeof DashboardProductsIndexRoute
  '/users': typeof DashboardUsersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_dashboard': typeof DashboardRouteRouteWithChildren
  '/_dashboard/': typeof DashboardIndexRoute
  '/_dashboard/products/': typeof DashboardProductsIndexRoute
  '/_dashboard/users/': typeof DashboardUsersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/' | '/products' | '/users'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/products' | '/users'
  id:
    | '__root__'
    | '/_dashboard'
    | '/_dashboard/'
    | '/_dashboard/products/'
    | '/_dashboard/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_dashboard"
      ]
    },
    "/_dashboard": {
      "filePath": "_dashboard/route.tsx",
      "children": [
        "/_dashboard/",
        "/_dashboard/products/",
        "/_dashboard/users/"
      ]
    },
    "/_dashboard/": {
      "filePath": "_dashboard/index.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/products/": {
      "filePath": "_dashboard/products/index.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/users/": {
      "filePath": "_dashboard/users/index.tsx",
      "parent": "/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
