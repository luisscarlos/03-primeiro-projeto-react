import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/12610554?s=460&u=bfa6ba057279a0ef8d74c979b2f5f5fe15efc802&v=4"
            alt="Luis Carlos"
          />
          <div>
            <strong>luisscarlos/be-the-hero</strong>
            <p>
              Projeto desenvolvido durante a Semana Omnistack 11.0 - Rocketseat
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/12610554?s=460&u=bfa6ba057279a0ef8d74c979b2f5f5fe15efc802&v=4"
            alt="Luis Carlos"
          />
          <div>
            <strong>luisscarlos/be-the-hero</strong>
            <p>
              Projeto desenvolvido durante a Semana Omnistack 11.0 - Rocketseat
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/12610554?s=460&u=bfa6ba057279a0ef8d74c979b2f5f5fe15efc802&v=4"
            alt="Luis Carlos"
          />
          <div>
            <strong>luisscarlos/be-the-hero</strong>
            <p>
              Projeto desenvolvido durante a Semana Omnistack 11.0 - Rocketseat
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
