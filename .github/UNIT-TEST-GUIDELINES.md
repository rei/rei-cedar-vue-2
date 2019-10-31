## General:
- Add tests any time a bug is discovered
- Test one thing at a time
- Jest snapshot
- Default values
- Both positive and negative
- Improper or inconsistent typing
  - All accepted prop types
- Check for side effects, limit values, and None
  - Really long values
  - Really short values
  - Floats and integers
  - Nulls
  - etc.
- Emitted events and values

## "CORRECT" Boundary Conditions
- **C**onformance — Does the value conform to an expected format?
- **O**rdering — Is the set of values ordered or unordered as appropriate?
- **R**ange — Is the value within reasonable minimum and maximum values?
- **R**eference — Does the code reference anything external that isn’t under direct control
of the code itself?
- **E**xistence — Does the value exist? (e.g., is non-null, non-zero, present in a set, etc.)
- **C**ardinality — Are there exactly enough values?
- **T**ime (absolute and relative) — Is everything happening in order? At the right time?
In time?
