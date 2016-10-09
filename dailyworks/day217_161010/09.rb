def randomize(str)
  str.split(/ /).map { |word|
    if word.size <= 4
      word
    else
      [word[0], word[1..-2].chars.shuffle, word[-1]].flatten.join
    end
  }.join(' ')
end

if $0 == __FILE__
  puts randomize("I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind .")
end
