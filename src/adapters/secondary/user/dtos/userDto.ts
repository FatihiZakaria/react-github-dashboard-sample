export interface UserDetailDto {
    name: string;
    avatar_url: string;
}

export interface UserRepositoriesDto {
    id: number;
    name: string;
    language: string;
    stargazers_count: number;
    description: string;
    created_at: string;
    updated_at: string;
    html_url: string;
}
