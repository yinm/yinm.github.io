execute "touch ./file-created-by-itamae" do
  not_if "test -f ./file-created-by-itamae"
end
