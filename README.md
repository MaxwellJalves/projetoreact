## Iniciando o projeto

- npx create-react-app projetoreact --template typescript

deixe apenas os arquivos

- public : index.html
- src : app.tsx ,
  - index.tsx

## Instalando o Styled-components no projeto

- Utilize um dos comandos abaixo
  - npm install --save styled-components || yarn add styled-components -D
  - npm i --save-dev @types/styled-components || yarn add @types/styled-components -D


-- Tabela de cores
https://www.homehost.com.br/blog/tutoriais/tabela-de-cores-html/

- Logo Marca 
- https://brand.mastercard.com/brandcenter-br/downloads.html   
- [x] Objetivo criar template do cartão master
- [x] Status
   -  ![TemplateCartao](https://user-images.githubusercontent.com/65586669/141667328-b7c0bacf-fdfe-479a-a7a2-3a5bf647eae2.gif)


-- Atualização

- yarn eslint --init
  -   ![image](https://user-images.githubusercontent.com/65586669/141655317-963a6002-0cde-4469-a328-5841a347e8b4.png)

passo 2
![image](https://user-images.githubusercontent.com/65586669/141655328-1fca3439-17e7-42de-aedd-9d0aa04ec24a.png)

Passo 3
![image](https://user-images.githubusercontent.com/65586669/141655343-4e251dad-11a2-4317-afb2-922f32fa6d82.png)

Passo 4
![image](https://user-images.githubusercontent.com/65586669/141655352-0b96a8d0-b486-4df6-bd72-ca28310a0513.png)

Passo 5
![image](https://user-images.githubusercontent.com/65586669/141655365-3648182a-8178-4d51-b7a8-b99dd55a12aa.png)

Passo 6 
![image](https://user-images.githubusercontent.com/65586669/141655370-ee949ac5-7eb1-452b-b5d5-1f668c5493b3.png)

Passo 7 
![image](https://user-images.githubusercontent.com/65586669/141655416-8d390aba-c719-4b58-ab33-ddb1c2710c25.png)

Passo 8
  - yarn add eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest 
eslint@latest
    - ![image](https://user-images.githubusercontent.com/65586669/141655434-7d3d119e-5b0e-4d3f-a074-1b3862243892.png)
    

- yarn add eslint-plugin-react -D
  "settings": {
      "react":{
        "version" : "detect"
      }
    }
    
# Adicionando EditorConfig , Prettier e EsLint ao projeto
- [x] Extensão EditorConfig
- [x] Criado arquivo padrão .editorconfig e feito os ajustes.
- [x] Instalado o eslint
  - -  yarn add eslint -D
- [x] Criando arquivo de configuração do eslint
  - npx eslint -- # adicionando plugins para versão do react

- npm install -D eslint-plugin-react  || yarn add eslint-plugin-react -D

após a instalação configurar o parametro settings no arquivo .eslintrc.json

"settings": {
      "react":{
        "version" : "detect"
      }
    }

-  Formatação : auxilia na formatação dos Hooks
npm install -D eslint-plugin-react-hooks  || yarn add eslint-plugin-react-hooks -D

  -  em "extends" no .eslintrc  confirmar se o plugin foi adicionado
        "plugin:react/recommended",

- Regras

    "rules": {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }

- Adicionando o prettier

 cmd :    echo {} > .prettierrc.json || botão direito  -> new file -> criar arquivo manual

{
  "semi": true,
  "printWidth": 80,
  "arrowParens": "avoid",
  "trailingComma": "all",
  "singleQuote": true
}



# Configuração para o VSCODE

- Habilitando scripts para executar o yarn  no vscode
- Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser



