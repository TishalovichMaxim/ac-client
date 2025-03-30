type PageInfo = {
    totalCount: number,
}

type PagedResponse<E> = {
    content: E[],
    pageInfo: PageInfo,
}

export type { PagedResponse, PageInfo }
