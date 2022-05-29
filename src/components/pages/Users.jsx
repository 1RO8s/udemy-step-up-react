import styled from "styled-components";
import { SearchInput } from "../../components/molecules/SearchInput";
import { UserCard } from "../../components/organisms/user/UserCard";
export const Users = () => {
  const users = [...Array(10).keys()].map((v) => {
    return {
      id: v,
      name: "Kevin",
      image: "https://source.unsplash.com/XHVpWcr5grQ",
      email: "kevin-atomic@example.com",
      phone: "0120-999-8888",
      company: {
        name: "dot ,inc"
      },
      website: "https://google.com"
    };
  });
  return (
    <SContainer>
      <h2>User list</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
