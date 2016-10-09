CIPHER_TABLE = ("a" .. "z").map{|c| (219 - c.ord).chr}.join.freeze
def cipher(str)
  str.tr('a-z', CIPHER_TABLE)
end

if $0 == __FILE__
  sentence = <<-EOS
    "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."
  EOS

  puts encryption = cipher(sentence)
  puts decryption = cipher(encryption)
end

