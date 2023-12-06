import styled from "styled-components";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  /* align-items: center;
  font-weight: 500;
  font-size: 1.4rem; */
`;

const Avatar = styled.img`
  display: block;
  height: 2rem;
  width: 1.5rem;
  /* height: 5rem;
  width: 5rem; */
  /* width: 4rem;
  */
  /* aspect-ratio: 1; */
  object-fit: cover;
  object-position: center;
  /* border-radius: 50%; */
  /* outline: 2px solid var(--color-grey-100); */
`;

function UserAvatar() {
  return (
    <StyledUserAvatar>
      <Avatar src="./imgs/Search.jpg" alt="default user" />
      {/* <Avatar src="./imgs/default-user.png" alt="default user" /> */}
      {/* <Avatar src="./imgs/default-user.jpg" alt={`avatar of ${fullName}`} /> */}
      {/* <span>{fullName}</span> */}
    </StyledUserAvatar>
  );
}

export default UserAvatar;
