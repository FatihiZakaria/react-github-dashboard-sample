import { UserRepositories, UserType } from '../../../../redux/actionsTypes/UserActionTypes';
import { UserDetailDto, UserRepositoriesDto } from '../dtos/userDto';

interface Mapper<T> {}
export class UserMapper implements Mapper<UserType> {
    static toModel(
        userDetailDto: UserDetailDto,
        userRepositoriesDto: UserRepositoriesDto[],
    ): UserType {
        const repositories: UserRepositories[] = userRepositoriesDto.map(
            (r: UserRepositoriesDto) => ({
                id: r.id,
                name: r.name,
                language: r.language,
                stargazers_count: r.stargazers_count,
                description: r.description,
                created_at: new Date(r.created_at).toISOString().slice(0, 10),
                updated_at: new Date(r.updated_at).toISOString().slice(0, 10),
                html_url: r.html_url,
            }),
        );
        return {
            user: {
                name: userDetailDto.name,
                avatar_url: userDetailDto.avatar_url,
            },
            repositories,
        };
    }
}
