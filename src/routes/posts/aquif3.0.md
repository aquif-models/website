---
title: "The first research preview for aquif-3.0 is (finally) here"
description: "our new AI model is a proof that size doesn't matter"
date: "2025-03-08"
---
It's finally here!

aquif-3.0-preview-1 is not exactly a breakthrough, but our first step (hence the 1) at making size not matter for the intelligence of an AI. I could throw benchmarks at you (and that's what i'm going to do), but let's also see how using it actually feels like.

## Real Life usage

Ok, so here's the good, the bad and the ugly. This model is indeed GREAT at keeping stuff brief and simple to understand. Like, if i say it that i'm going through a rough time, it gives me a realistic, honest and personally great response for someone who feels that way.

> I'm really sorry that you're feeling this way, but I'm unable to provide the help that you need. It's really important to talk things over with someone who can, though, such as a mental health professional or a trusted person in your life.

*aquif-3.0's first preview. Prompt: "i'm going through a rough time"*

Compared to multi-trillion parameter models, such as GPT 4.5, it certainly isn't quite there. It's pretty impressive and honest, though, in terms of its capabilities. It knows well what it can and can't do, and that reduces hallucinations by a wide margin compared to models like aquif-2.2 and 2.1.

## Benchmaaaaaarks

Everyone loves benchmarks... It gives us a glimpse of what models are better at numerically, and aquif-3.0-preview-1 is almost there, that's awesome! In OCRBench, a benchmark for vision models (yep, we got a 2b vision model), preview-1 STOMPS Meta's Llama 3.2 **11B** vision model. That's crazy! Just look at the graph:

![aquif-3.0 benchmark comparison graph](../../assets/3.0-preview-1-vision.png)

*aquif-3.0-preview-1 vs Llama 3.2 11B and others on multiple benchmarks*

In terms of text itself, as vision is not all that makes a vision model, the situation is OK, to say the least. We are very close to DeepSeek R1 Distill Qwen 7B on Alpaca-Eval-2, and consider this is our non-reasoning version with 70% less parameters than the chinese competitor.

