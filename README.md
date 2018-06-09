
<!--#echo json="package.json" key="name" underline="=" -->
timestring-notsep
=================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Tiny wrapper around timestring (parser for human-readable durations) that
fails loudly if you accidentially use a thousand separator.
<!--/#echo -->


Use `timestring` more robustly:
Some countries use `,` and `.` swapped,
with dot as their thousand separator
and comma for the fractional part.

To avoid config accidents, this module enforces the use of
dot for the fractional part and no thousand separators.
It can't help with inherently ambiguous cases like `1.234`,
but at least it prevents some obvious mistakes like
`1,25` being parsed as `125`.



&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
