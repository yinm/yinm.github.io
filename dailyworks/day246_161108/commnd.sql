SELECT
  tbl_exam.*,
  tbl_std.name
FROM
  tbl_std
INNER JOIN
  tbl_exam
ON
  tbl_std.id = tbl_exam.id;
