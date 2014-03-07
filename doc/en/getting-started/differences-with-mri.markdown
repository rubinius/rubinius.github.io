---
layout: doc_en
title: Differences With MRI
previous: Troubleshooting
previous_url: getting-started/troubleshooting
next: Contributing
next_url: contributing
---

Rubinius aims to implement as many features of Ruby as possible as well as
those defined in [RubySpec][rubyspec]. Although most of these are currently
supported there are differences between Rubinius and MRI that one should be
aware of.

These features are categorized as following:

* Libraries: entire libraries such as TracePoint
* General: general features such as `$SAFE`
* In Progress: features that are being worked on

### Libraries

Currently the following libraries are not supported by Rubinius:

* Continuation
* TracePoint
* Tracer
* Ripper

### General

The following general features are not implemented:

* Tracing global variables using `Kernel.trace_var`
* Tracing method calls using `Kernel.set_trace_func`
* Refinements (introduced in Ruby 2.0/2.1)
* $SAFE levels

### In Progress

The following features are currently a work in progress and will be available
in the future:

* Keyword arguments: <https://github.com/rubinius/rubinius/issues/2669>

[rubyspec]: http://rubyspec.org/
