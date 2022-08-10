import React from 'react'

export default function Text({ addEmoji }) {
    let text = "l Love GoLang language"
    let text2 = "why so much love"
    return (
      <div>{addEmoji ? addEmoji(text,' :) '): text2}</div>
    )
}
