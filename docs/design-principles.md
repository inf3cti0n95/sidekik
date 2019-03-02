---
id: design-principles
title: Design Principles
---

Following are the Design Principles that drives the development at sidekik.

## Common Abstraction

In general we resist adding features that can be implemented in userland. We don't want to bloat your apps with useless library code. However, there are exceptions to this.

For example, if we provide people would create custom abstractions for them. When there are multiple abstractions competing, Sidekik can't enforce or take advantage of the properties of either of them. It has to work with the lowest common denominator. This is why sometimes we might add features to sidekik itself.

We always discuss such improvement proposals with the community. You can find some of those discussions by the ["big picture"](https://github.com/inf3cti0n95/sidekik/issues?q=is:open+is:issue+label:"Type:+Big+Picture") label on the sidekik issue tracker.

## Elegant APIs

We try to provide elegant APIs where possible. We are much less concerned with the implementation being elegant. The real world is far from perfect, and to a reasonable extent we prefer to put the ugly code into the library if it means the user does not have to write it. When we evaluate new code, we are looking for an implementation that is correct, performant and affords a good developer experience. Elegance is secondary.

We prefer boring code to clever code. Code is disposable and often changes. So it is important that it doesn't introduce new internal abstractions unless absolutely necessary. Verbose code that is easy to move around, change and remove is preferred to elegant code that is prematurely abstracted and hard to change.
