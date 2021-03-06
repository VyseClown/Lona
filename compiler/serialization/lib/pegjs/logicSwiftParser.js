const pegjs = require('pegjs')
const fs = require('fs')
const path = require('path')

const grammar = fs.readFileSync(
  path.resolve(__dirname, 'logic.swift.pegjs'),
  'utf8'
)
const parser = pegjs.generate(grammar, {
  allowedStartRules: [
    'topLevelDeclarations',
    'program',
    'statement',
    'declaration',
    'expression',
  ],
})

module.exports = parser
