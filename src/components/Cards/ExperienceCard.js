import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  &:hover ${Document} {
    display: flex;
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} alt="Company Logo" />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>({experience.date})</Duration>
        </Body>
      </Top>
      <Description>
        {experience.desc}
        {experience.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience.skills.map((skill, index) => (
                  <Skill key={index}>.{skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="_blank" rel="noopener noreferrer">
          <Document src={experience.doc} alt="Document Preview" />
        </a>
      )}
    </Card>
  );
};

const ExperienceSection = () => {
  const experience = {
    img: 'data:image/png;base64,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',
    role: 'Front End Developer',
    company: 'Saylani Mass IT Tranning',
    date: 'May-2024 - Present',
    desc: 'Working on the frontend of the web application using Bootstrap, CSS, JavaScript and React Js.',
    skills: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT' , "React Js"],
  };

  return <ExperienceCard experience={experience} />;
};

export default ExperienceSection;
