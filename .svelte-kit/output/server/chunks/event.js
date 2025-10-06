const NULL_BODY_STATUS = [101, 103, 204, 205, 304];
const IN_WEBCONTAINER = !!globalThis.process?.versions?.webcontainer;
const text_encoder = new TextEncoder();
const text_decoder = new TextDecoder();
function get_relative_path(from, to) {
  const from_parts = from.split(/[/\\]/);
  const to_parts = to.split(/[/\\]/);
  from_parts.pop();
  while (from_parts[0] === to_parts[0]) {
    from_parts.shift();
    to_parts.shift();
  }
  let i = from_parts.length;
  while (i--) from_parts[i] = "..";
  return from_parts.concat(to_parts).join("/");
}
function base64_encode(bytes) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(bytes).toString("base64");
  }
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
function base64_decode(encoded) {
  if (globalThis.Buffer) {
    const buffer = globalThis.Buffer.from(encoded, "base64");
    return new Uint8Array(buffer);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
let sync_store = null;
let als;
import("node:async_hooks").then((hooks) => als = new hooks.AsyncLocalStorage()).catch(() => {
});
function get_request_store() {
  const result = try_get_request_store();
  if (!result) {
    let message = "Could not get the request store.";
    if (als) {
      message += " This is an internal error.";
    } else {
      message += " In environments without `AsyncLocalStorage`, the request store (used by e.g. remote functions) must be accessed synchronously, not after an `await`. If it was accessed synchronously then this is an internal error.";
    }
    throw new Error(message);
  }
  return result;
}
function try_get_request_store() {
  return sync_store ?? als?.getStore() ?? null;
}
function with_request_store(store, fn) {
  try {
    sync_store = store;
    return als ? als.run(store, fn) : fn();
  } finally {
    if (!IN_WEBCONTAINER) {
      sync_store = null;
    }
  }
}
export {
  IN_WEBCONTAINER as I,
  NULL_BODY_STATUS as N,
  text_encoder as a,
  base64_encode as b,
  get_request_store as c,
  base64_decode as d,
  get_relative_path as g,
  text_decoder as t,
  with_request_store as w
};
