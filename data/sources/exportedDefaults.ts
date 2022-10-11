export const exportedDefaults = {"array-group-str-omit-num-char":"{\n  \"wildcard\": \"*\",\n  \"dedupePlease\": true\n}","array-includes-with-glob":"{\n  \"arrayVsArrayAllMustBeFound\": \"any\",\n  \"caseSensitive\": true\n}","array-of-arrays-into-ast":"{\n  \"dedupe\": true\n}","array-pull-all-with-glob":"{\n  \"caseSensitive\": true\n}","ast-compare":"{\n  \"hungryForWhitespace\": false,\n  \"matchStrictly\": false,\n  \"verboseWhenMismatches\": false,\n  \"useWildcards\": false\n}","ast-deep-contains":"{\n  \"skipContainers\": true,\n  \"arrayStrictComparison\": false\n}","ast-delete-object":"{\n  \"matchKeysStrictly\": false,\n  \"hungryForWhitespace\": false\n}","check-types-mini":"{\n  \"ignoreKeys\": [],\n  \"ignorePaths\": [],\n  \"acceptArrays\": false,\n  \"acceptArraysIgnore\": [],\n  \"enforceStrictKeyset\": true,\n  \"schema\": {},\n  \"msg\": \"check-types-mini\",\n  \"optsVarName\": \"opts\"\n}","codsen-parser":"{\n  \"reportProgressFunc\": null,\n  \"reportProgressFuncFrom\": 0,\n  \"reportProgressFuncTo\": 100,\n  \"tagCb\": null,\n  \"charCb\": null,\n  \"errCb\": null\n}","codsen-tokenizer":"{\n  \"tagCb\": null,\n  \"tagCbLookahead\": 0,\n  \"charCb\": null,\n  \"charCbLookahead\": 0,\n  \"reportProgressFunc\": null,\n  \"reportProgressFuncFrom\": 0,\n  \"reportProgressFuncTo\": 100\n}","csv-split-easy":"{\n  \"removeThousandSeparatorsFromNumbers\": true,\n  \"padSingleDecimalPlaceNumbers\": true,\n  \"forceUKStyle\": false\n}","detergent":"{\n    \"fixBrokenEntities\": true,\n    \"removeWidows\": true,\n    \"convertEntities\": true,\n    \"convertDashes\": true,\n    \"convertApostrophes\": true,\n    \"replaceLineBreaks\": true,\n    \"removeLineBreaks\": false,\n    \"useXHTML\": true,\n    \"dontEncodeNonLatin\": true,\n    \"addMissingSpaces\": true,\n    \"convertDotsToEllipsis\": true,\n    \"stripHtml\": true,\n    \"eol\": \"lf\",\n    \"stripHtmlButIgnoreTags\": [\n        \"b\",\n        \"strong\",\n        \"i\",\n        \"em\",\n        \"br\",\n        \"sup\"\n    ],\n    \"stripHtmlAddNewLine\": [\n        \"li\",\n        \"/ul\"\n    ],\n    \"cb\": null\n}","email-all-chars-within-ascii":"{\n  \"lineLength\": 500\n}","email-comb":"{\n  \"whitelist\": [],\n  \"backend\": [],\n  \"uglify\": false,\n  \"removeHTMLComments\": true,\n  \"removeCSSComments\": true,\n  \"doNotRemoveHTMLCommentsWhoseOpeningTagContains\": [\n    \"[if\",\n    \"[endif\"\n  ],\n  \"htmlCrushOpts\": {\n    \"removeLineBreaks\": false,\n    \"removeIndentations\": false,\n    \"removeHTMLComments\": false,\n    \"removeCSSComments\": false,\n    \"lineLengthLimit\": 500\n  },\n  \"reportProgressFunc\": null,\n  \"reportProgressFuncFrom\": 0,\n  \"reportProgressFuncTo\": 100\n}","generate-atomic-css":"{\n  \"includeConfig\": true,\n  \"includeHeadsAndTails\": true,\n  \"pad\": true,\n  \"configOverride\": null,\n  \"reportProgressFunc\": null,\n  \"reportProgressFuncFrom\": 0,\n  \"reportProgressFuncTo\": 100\n}","helga":"{\n  \"targetJSON\": false\n}","html-crush":"{\n  \"lineLengthLimit\": 500,\n  \"removeIndentations\": true,\n  \"removeLineBreaks\": false,\n  \"removeHTMLComments\": false,\n  \"removeCSSComments\": true,\n  \"reportProgressFunc\": null,\n  \"reportProgressFuncFrom\": 0,\n  \"reportProgressFuncTo\": 100,\n  \"breakToTheLeftOf\": [\n    \"</td\",\n    \"<html\",\n    \"</html\",\n    \"<head\",\n    \"</head\",\n    \"<meta\",\n    \"<link\",\n    \"<table\",\n    \"<script\",\n    \"</script\",\n    \"<!DOCTYPE\",\n    \"<style\",\n    \"</style\",\n    \"<title\",\n    \"<body\",\n    \"@media\",\n    \"</body\",\n    \"<!--[if\",\n    \"<!--<![endif\",\n    \"<![endif]\"\n  ],\n  \"mindTheInlineTags\": [\n    \"a\",\n    \"abbr\",\n    \"acronym\",\n    \"audio\",\n    \"b\",\n    \"bdi\",\n    \"bdo\",\n    \"big\",\n    \"br\",\n    \"button\",\n    \"canvas\",\n    \"cite\",\n    \"code\",\n    \"data\",\n    \"datalist\",\n    \"del\",\n    \"dfn\",\n    \"em\",\n    \"embed\",\n    \"i\",\n    \"iframe\",\n    \"img\",\n    \"input\",\n    \"ins\",\n    \"kbd\",\n    \"label\",\n    \"map\",\n    \"mark\",\n    \"meter\",\n    \"noscript\",\n    \"object\",\n    \"output\",\n    \"picture\",\n    \"progress\",\n    \"q\",\n    \"ruby\",\n    \"s\",\n    \"samp\",\n    \"script\",\n    \"select\",\n    \"slot\",\n    \"small\",\n    \"span\",\n    \"strong\",\n    \"sub\",\n    \"sup\",\n    \"svg\",\n    \"template\",\n    \"textarea\",\n    \"time\",\n    \"u\",\n    \"tt\",\n    \"var\",\n    \"video\",\n    \"wbr\"\n  ]\n}","html-img-alt":"{\n  \"unfancyTheAltContents\": true\n}","html-table-patcher":"{\n  \"cssStylesContent\": \"\",\n  \"alwaysCenter\": false\n}","is-html-tag-opening":"{\n  \"allowCustomTagNames\": false,\n  \"skipOpeningBracket\": false\n}","is-media-descriptor":"{\n  \"offset\": 0\n}","is-relative-uri":"{\n  \"flagUpUrisWithSchemes\": true\n}","js-row-num":"{\n  \"padStart\": 3,\n  \"overrideRowNum\": null,\n  \"returnRangesOnly\": false,\n  \"triggerKeywords\": [\n    \"console.log\"\n  ],\n  \"extractedLogContentsWereGiven\": false\n}","json-variables":"{\n  \"heads\": \"%%_\",\n  \"tails\": \"_%%\",\n  \"headsNoWrap\": \"%%-\",\n  \"tailsNoWrap\": \"-%%\",\n  \"lookForDataContainers\": true,\n  \"dataContainerIdentifierTails\": \"_data\",\n  \"wrapHeadsWith\": \"\",\n  \"wrapTailsWith\": \"\",\n  \"dontWrapVars\": [],\n  \"preventDoubleWrapping\": true,\n  \"wrapGlobalFlipSwitch\": true,\n  \"noSingleMarkers\": false,\n  \"resolveToBoolIfAnyValuesContainBool\": true,\n  \"resolveToFalseIfAnyValuesContainBool\": true,\n  \"throwWhenNonStringInsertedInString\": false,\n  \"allowUnresolved\": false\n}","lerna-clean-changelogs":"{\n  \"extras\": false\n}","object-all-values-equal-to":"{\n  \"arraysMustNotContainPlaceholders\": true\n}","object-delete-key":"{\n  \"key\": null,\n  \"cleanup\": true,\n  \"only\": \"any\"\n}","object-fill-missing-keys":"{\n  \"placeholder\": false,\n  \"doNotFillThesePathsIfTheyContainPlaceholders\": [],\n  \"useNullAsExplicitFalse\": true\n}","object-flatten-all-arrays":"{\n  \"flattenArraysContainingStringsToBeEmpty\": false\n}","object-flatten-referencing":"{\n  \"wrapHeadsWith\": \"%%_\",\n  \"wrapTailsWith\": \"_%%\",\n  \"dontWrapKeys\": [],\n  \"dontWrapPaths\": [],\n  \"xhtml\": true,\n  \"preventDoubleWrapping\": true,\n  \"preventWrappingIfContains\": [],\n  \"objectKeyAndValueJoinChar\": \".\",\n  \"wrapGlobalFlipSwitch\": true,\n  \"ignore\": [],\n  \"whatToDoWhenReferenceIsMissing\": 0,\n  \"mergeArraysWithLineBreaks\": true,\n  \"mergeWithoutTrailingBrIfLineContainsBr\": true,\n  \"enforceStrictKeyset\": true\n}","object-merge-advanced":"{\n  \"cb\": null,\n  \"mergeObjectsOnlyWhenKeysetMatches\": true,\n  \"ignoreKeys\": [],\n  \"hardMergeKeys\": [],\n  \"hardArrayConcatKeys\": [],\n  \"mergeArraysContainingStringsToBeEmpty\": false,\n  \"oneToManyArrayObjectMerge\": false,\n  \"hardMergeEverything\": false,\n  \"hardArrayConcat\": false,\n  \"ignoreEverything\": false,\n  \"concatInsteadOfMerging\": true,\n  \"dedupeStringsInArrayValues\": false,\n  \"mergeBoolsUsingOrNotAnd\": true,\n  \"useNullAsExplicitFalse\": false\n}","object-no-new-keys":"{\n  \"mode\": 2\n}","ranges-ent-decode":"{\n  \"isAttributeValue\": false,\n  \"strict\": false\n}","ranges-invert":"{\n  \"strictlyTwoElementsInRangeArrays\": false,\n  \"skipChecks\": false\n}","ranges-is-index-within":"{\n  \"inclusiveRangeEnds\": false,\n  \"returnMatchedRangeInsteadOfTrue\": false\n}","ranges-merge":"{\n  \"mergeType\": 1,\n  \"progressFn\": null,\n  \"joinRangesThatTouchEdges\": true\n}","ranges-push":"{\n  \"limitToBeAddedWhitespace\": false,\n  \"limitLinebreaksCount\": 1,\n  \"mergeType\": 1\n}","ranges-sort":"{\n  \"strictlyTwoElementsInRangeArrays\": false,\n  \"progressFn\": null\n}","rehype-responsive-tables":"{\n  \"tableClassName\": \"rrt-table\",\n  \"newTrClassName\": \"rrt-new-tr\",\n  \"hideTdClassName\": \"rrt-del-td\",\n  \"gapTrClassName\": \"rrt-gap-tr\",\n  \"newTrSpanClassName\": \"rrt-new-tr-span\",\n  \"up\": [],\n  \"newTheadBlacklist\": []\n}","string-apostrophes":"{\n  \"convertEntities\": false,\n  \"convertApostrophes\": true\n}","string-bionic-split":"{\n  \"throwIfEdgeWhitespace\": true\n}","string-collapse-white-space":"{\n  \"trimStart\": true,\n  \"trimEnd\": true,\n  \"trimLines\": false,\n  \"trimnbsp\": false,\n  \"removeEmptyLines\": false,\n  \"limitConsecutiveEmptyLinesTo\": 0,\n  \"enforceSpacesOnly\": false\n}","string-extract-sass-vars":"{\n  \"throwIfEmpty\": false,\n  \"cb\": null\n}","string-find-heads-tails":"{\n  \"fromIndex\": 0,\n  \"throwWhenSomethingWrongIsDetected\": true,\n  \"allowWholeValueToBeOnlyHeadsOrTails\": true,\n  \"source\": \"string-find-heads-tails\",\n  \"matchHeadsAndTailsStrictlyInPairsByTheirOrder\": false,\n  \"relaxedAPI\": false\n}","string-find-malformed":"{\n  \"stringOffset\": 0,\n  \"maxDistance\": 1,\n  \"ignoreWhitespace\": true\n}","string-match-left-right":"{\n  \"i\": false,\n  \"trimBeforeMatching\": false,\n  \"trimCharsBeforeMatching\": [],\n  \"maxMismatches\": 0,\n  \"firstMustMatch\": false,\n  \"lastMustMatch\": false,\n  \"hungry\": false\n}","string-overlap-one-on-another":"{\n  \"offset\": 0,\n  \"offsetFillerCharacter\": \" \"\n}","string-range-expander":"{\n  \"str\": \"\",\n  \"from\": 0,\n  \"to\": 0,\n  \"ifLeftSideIncludesThisThenCropTightly\": \"\",\n  \"ifLeftSideIncludesThisCropItToo\": \"\",\n  \"ifRightSideIncludesThisThenCropTightly\": \"\",\n  \"ifRightSideIncludesThisCropItToo\": \"\",\n  \"extendToOneSide\": false,\n  \"wipeAllWhitespaceOnLeft\": false,\n  \"wipeAllWhitespaceOnRight\": false,\n  \"addSingleSpaceToPreventAccidentalConcatenation\": false\n}","string-remove-duplicate-heads-tails":"{\n  \"heads\": [\n    \"{{\"\n  ],\n  \"tails\": [\n    \"}}\"\n  ]\n}","string-remove-thousand-separators":"{\n  \"removeThousandSeparatorsFromNumbers\": true,\n  \"padSingleDecimalPlaceNumbers\": true,\n  \"forceUKStyle\": false\n}","string-remove-widows":"{\n  \"removeWidowPreventionMeasures\": false,\n  \"convertEntities\": true,\n  \"targetLanguage\": \"html\",\n  \"UKPostcodes\": false,\n  \"hyphens\": true,\n  \"minWordCount\": 4,\n  \"minCharCount\": 5,\n  \"ignore\": [],\n  \"reportProgressFunc\": null,\n  \"reportProgressFuncFrom\": 0,\n  \"reportProgressFuncTo\": 100,\n  \"tagRanges\": []\n}","string-split-by-whitespace":"{\n  \"ignoreRanges\": []\n}","string-strip-html":"{\n  \"ignoreTags\": [],\n  \"ignoreTagsWithTheirContents\": [],\n  \"onlyStripTags\": [],\n  \"stripTogetherWithTheirContents\": [\n    \"script\",\n    \"style\",\n    \"xml\"\n  ],\n  \"skipHtmlDecoding\": false,\n  \"trimOnlySpaces\": false,\n  \"stripRecognisedHTMLOnly\": false,\n  \"dumpLinkHrefsNearby\": {\n    \"enabled\": false,\n    \"putOnNewLine\": false,\n    \"wrapHeads\": \"\",\n    \"wrapTails\": \"\"\n  },\n  \"cb\": null,\n  \"reportProgressFunc\": null,\n  \"reportProgressFuncFrom\": 0,\n  \"reportProgressFuncTo\": 100\n}","string-trim-spaces-only":"{\n  \"classicTrim\": false,\n  \"cr\": false,\n  \"lf\": false,\n  \"tab\": false,\n  \"space\": true,\n  \"nbsp\": false\n}","string-truncator":"{\n  \"maxLen\": 10,\n  \"maxLines\": 2,\n  \"monospace\": false,\n  \"noEmpty\": true,\n  \"letterWidths\": {\n    \"A\": 142.66,\n    \"a\": 131.48,\n    \"B\": 137.23,\n    \"b\": 131.48,\n    \"C\": 148.8,\n    \"c\": 117.33,\n    \"D\": 153.61,\n    \"d\": 131.48,\n    \"E\": 132.61,\n    \"e\": 125.05,\n    \"F\": 129.25,\n    \"f\": 102.34,\n    \"G\": 158.98,\n    \"g\": 131.06,\n    \"H\": 148.84,\n    \"h\": 126.73,\n    \"I\": 86.13,\n    \"i\": 81.38,\n    \"J\": 113.27,\n    \"j\": 90.14,\n    \"K\": 140.98,\n    \"k\": 119.73,\n    \"L\": 127.28,\n    \"l\": 81.09,\n    \"M\": 167.47,\n    \"m\": 169.7,\n    \"N\": 149.41,\n    \"n\": 126.73,\n    \"O\": 161.92,\n    \"o\": 129.25,\n    \"P\": 133.84,\n    \"p\": 131.48,\n    \"Q\": 164.39,\n    \"q\": 131.63,\n    \"R\": 136.44,\n    \"r\": 106.66,\n    \"S\": 125.44,\n    \"s\": 109.78,\n    \"T\": 131.84,\n    \"t\": 99.27,\n    \"U\": 145.63,\n    \"u\": 122.25,\n    \"V\": 142.05,\n    \"v\": 119.28,\n    \"W\": 183.81,\n    \"w\": 152.23,\n    \"X\": 140.95,\n    \"x\": 117.3,\n    \"Y\": 137.81,\n    \"y\": 119.7,\n    \"Z\": 128.09,\n    \"z\": 112.59,\n    \"А\": 144.95,\n    \"а\": 127.88,\n    \"Б\": 142.7,\n    \"б\": 127.88,\n    \"В\": 143.39,\n    \"в\": 126.7,\n    \"Г\": 122.67,\n    \"г\": 106.41,\n    \"Д\": 148.17,\n    \"д\": 134.84,\n    \"Е\": 143.39,\n    \"е\": 127.88,\n    \"Ё\": 143.39,\n    \"ё\": 127.88,\n    \"Ж\": 188.91,\n    \"ж\": 159.17,\n    \"З\": 143.25,\n    \"з\": 120,\n    \"И\": 151.11,\n    \"и\": 131.7,\n    \"Й\": 151.11,\n    \"й\": 131.7,\n    \"К\": 143.39,\n    \"к\": 126.7,\n    \"Л\": 146.13,\n    \"л\": 130.39,\n    \"М\": 166.63,\n    \"м\": 143.25,\n    \"Н\": 151.11,\n    \"н\": 127.88,\n    \"О\": 158.91,\n    \"о\": 127.88,\n    \"П\": 151.11,\n    \"п\": 127.88,\n    \"Р\": 143.39,\n    \"р\": 127.88,\n    \"С\": 151.11,\n    \"с\": 120,\n    \"Т\": 135.53,\n    \"т\": 120,\n    \"У\": 143.39,\n    \"у\": 120,\n    \"Ф\": 169.77,\n    \"ф\": 166.48,\n    \"Х\": 143.39,\n    \"х\": 120,\n    \"Ц\": 152.48,\n    \"ц\": 129.92,\n    \"Ч\": 141.2,\n    \"ч\": 125.34,\n    \"Ш\": 182.14,\n    \"ш\": 158.91,\n    \"Щ\": 183.52,\n    \"щ\": 160.95,\n    \"Ъ\": 166.63,\n    \"ъ\": 135.53,\n    \"Ы\": 173.13,\n    \"ы\": 151.11,\n    \"Ь\": 141.2,\n    \"ь\": 119.94,\n    \"Э\": 151.11,\n    \"э\": 121.38,\n    \"Ю\": 190,\n    \"ю\": 158.91,\n    \"Я\": 150.02,\n    \"я\": 128.14,\n    \"Ѐ\": 144.95,\n    \"ѐ\": 129.17,\n    \"Ђ\": 156.58,\n    \"ђ\": 127.88,\n    \"Ѓ\": 122.67,\n    \"ѓ\": 106.41,\n    \"Є\": 151.11,\n    \"є\": 120,\n    \"Ѕ\": 143.39,\n    \"ѕ\": 120,\n    \"І\": 88.91,\n    \"і\": 81.11,\n    \"Ї\": 88.91,\n    \"ї\": 85.22,\n    \"Ј\": 120,\n    \"ј\": 81.11,\n    \"Љ\": 190,\n    \"љ\": 168.34,\n    \"Њ\": 187.89,\n    \"њ\": 163.48,\n    \"Ћ\": 158.91,\n    \"ћ\": 127.88,\n    \"Ќ\": 143.39,\n    \"ќ\": 126.7,\n    \"Ѝ\": 152.75,\n    \"ѝ\": 129.17,\n    \"Ў\": 143.39,\n    \"ў\": 120,\n    \"Џ\": 151.11,\n    \"џ\": 127.88,\n    \"Đ\": 151.11,\n    \"đ\": 127.88,\n    \"א\": 140.31,\n    \"ב\": 128.83,\n    \"ג\": 109.83,\n    \"ד\": 120.14,\n    \"ה\": 149.67,\n    \"ו\": 94.78,\n    \"ז\": 97.66,\n    \"ח\": 149.67,\n    \"ט\": 140.17,\n    \"י\": 94.44,\n    \"ך\": 123.91,\n    \"כ\": 130.06,\n    \"ל\": 124.66,\n    \"מ\": 146.88,\n    \"ם\": 148.11,\n    \"ן\": 93.63,\n    \"נ\": 107.84,\n    \"ס\": 143.05,\n    \"ע\": 134.09,\n    \"ף\": 123.36,\n    \"פ\": 130.13,\n    \"ץ\": 118.03,\n    \"צ\": 130.47,\n    \"ק\": 143.25,\n    \"ר\": 121.38,\n    \"ש\": 150.3,\n    \"ת\": 147.14,\n    \"&\": 142.27,\n    \"-\": 114.55,\n    \"'\": 83.19,\n    \"!\": 86.55,\n    \"?\": 120.7,\n    \"`\": 89.34,\n    \"\\\"\": 106,\n    \"_\": 120.7,\n    \"*\": 118.61,\n    \"(\": 92.42,\n    \")\": 92.28,\n    \"{\": 95.23,\n    \"}\": 95.23,\n    \"[\": 97.33,\n    \"]\": 97.33,\n    \"+\": 125.89,\n    \"=\": 125.89,\n    \"^\": 113.42,\n    \"%\": 142.41,\n    \"#\": 139.61,\n    \"/\": 104.61,\n    \"\\\\\": 104.61,\n    \"|\": 88.92,\n    \",\": 88.5,\n    \".\": 90.61,\n    \";\": 87.67,\n    \"…\": 155,\n    \" \": 79.2\n  }\n}","stristri":"{\n  \"html\": true,\n  \"css\": true,\n  \"text\": false,\n  \"templatingTags\": false,\n  \"js\": true,\n  \"reportProgressFunc\": null,\n  \"reportProgressFuncFrom\": 0,\n  \"reportProgressFuncTo\": 100\n}","tsd-extract":"{\n  \"extractAll\": false,\n  \"semi\": true,\n  \"mustInclude\": \"\",\n  \"stripAs\": false\n}","util-array-object-or-both":"{\n  \"msg\": \"\",\n  \"optsVarName\": \"given variable\"\n}"};
