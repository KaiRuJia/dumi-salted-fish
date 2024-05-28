---
title: pathSearch
order: 2
---

```jsx
import { pathSearch } from 'y-salted-fish'

export default () => {
  const { a, b} = pathSearch('http://www.xxxx.com?a=2&b=9')
  return (
    <div>
      <p>a: { a }</p>
      <p>b: { b }</p>
    </div>
  )
}
```