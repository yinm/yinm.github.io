str = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."
words = str.split()
answer = {}

words.each.with_index(1) do |word, idx|
  if [1, 5, 6, 7, 8, 9, 15, 16, 19].include?(idx)
    answer[word[0]] = idx
  else
    answer[word[0..1]] = idx
  end
end

p answer
