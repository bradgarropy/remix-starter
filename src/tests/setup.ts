// src/tests/setup.ts
import "@testing-library/jest-dom/vitest"

import { Buffer } from 'node:buffer'

import { cleanup } from "@testing-library/react"
import { TextDecoder, TextEncoder } from 'util'
import { afterEach, vi } from "vitest"

global.Buffer = Buffer
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

afterEach(() => {
    cleanup()
    vi.resetModules()
})