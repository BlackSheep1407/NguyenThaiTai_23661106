Phần 1: Backup + Revert / Khôi phục main nếu lỡ merge nhầm

# 1️⃣ Kiểm tra trạng thái hiện tại

git status
git branch
git log --oneline

# 2️⃣ Nếu có local changes chưa commit

git add .
git commit -m "WIP: lưu local changes"

# hoặc stash nếu không muốn commit

git stash

# 3️⃣ Tạo backup cho main (an toàn tuyệt đối)

git checkout main
git branch backup-main

# 4️⃣ Revert merge (nếu muốn quay về trước merge nhầm)

git revert -m 1 <merge-commit-ID>

# 5️⃣ Nếu có conflict, mở file, sửa, sau đó:

git add .
git commit

# 6️⃣ Kiểm tra lại main

git log --oneline
git status

# 7️⃣ Nếu muốn reset main hoàn toàn về nhánh phụ (overwrite)

git checkout main
git reset --hard draft/gifted-shamir

# 8️⃣ Push main lên remote

git push -f origin main

✅ Lưu ý:

backup-main giúp cứu main cũ.

reset --hard ghi đè tất cả, nên chỉ dùng khi đã chắc chắn backup.
