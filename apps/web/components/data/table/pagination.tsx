"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import { Typography } from "ui";
/* create pagination with arrows and 5 page numbers */

export const Pagination = ({
  current,
  total,
  pageLength,
  href,
}: {
  current?: number;
  total: number;
  pageLength: number;
  href: string;
}) => {
  const params = useParams();
  const searchParams = useSearchParams();

  const pageQuery = searchParams?.get("page");
  const currentPage = pageQuery ? parseInt(pageQuery) : current || 1;
  const totalPages = Math.ceil(total / pageLength || 20);
  let startPage: number, endPage: number;
  if (totalPages <= 5) {
    // less than 5 total pages so show all
    startPage = 1;
    endPage = totalPages;
  } else {
    // more than 5 total pages so calculate start and end pages
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );
  return (
    <div className={"w-full mx-auto mt-2"}>
      <div className={"mx-auto w-44 whitespace-nowrap"}>
        {currentPage !== 1 && (
          <Link
            href={`${params?.uri}?page=${currentPage - 1}`}
            className={"m-2"}
            prefetch={false}
          >
            {"<"}
          </Link>
        )}
        {startPage > 1 && (
          <Typography tag={"span"} className={"m-2"}>
            <Link href={`${params?.uri}?page=1`} prefetch={false}>1</Link>
            <Typography tag={"span"} className={"ml-4"}>
              ...
            </Typography>
          </Typography>
        )}
        {pages.map((page) => (
          <Link key={page} href={`${params?.uri}?page=${page}`} prefetch={false}>
            <Typography
              tag={"span"}
              className={page === currentPage ? "font-bold m-2" : "m-2"}
            >
              {page}
            </Typography>
          </Link>
        ))}

        {endPage < totalPages && (
          <Typography tag={"span"} className={"m-2"}>
            {currentPage < totalPages - 3 ? (
              <Typography tag={"span"} className={"mr-4"}>
                ...
              </Typography>
            ) : (
              ""
            )}
            <Link href={`${params?.uri}?page=${totalPages}`} prefetch={false}>{totalPages}</Link>
          </Typography>
        )}
        {currentPage !== totalPages && (
          <Link href={`${params?.uri}?page=${currentPage + 1}`} prefetch={false}>
            <Typography tag={"span"} className={"m-2"}>
              {">"}
            </Typography>
          </Link>
        )}
      </div>
    </div>
  );
};
