file "./created-by-file-resource" do
  action :edit
  block do |content|
    content.gsub!(/だよ/, "変更したよ！")
  end
end
