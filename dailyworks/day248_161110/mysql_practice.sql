select
  *
from
  tbl_std
where
  id = any(
    select
      id
    from
      tbl_exam
  )
;
