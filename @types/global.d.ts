/// <reference types="node" />

// Extend the NodeJS namespace with variables in next.config.js
declare namespace NodeJS {
  interface ProcessEnv {}
}
