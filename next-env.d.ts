/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    netlify?: boolean
  }
}
