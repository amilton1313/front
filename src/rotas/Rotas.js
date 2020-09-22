import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TelefonesLista from '../intranet/telefones/TelefonesLista'
import Header from '../cadastros/header/Header'
import Entrada from '../cadastros/principal/Entrada'
import Principal from '../cadastros/principal/Principal'
import PessoaDados from '../cadastros/pessoa/PessoaDados'
// import PessoaDados_I from '../cadastros/pessoa/PessoaDados_I'
import PessoaDados_A from '../cadastros/pessoa/PessoaDados_A'
import PessoasLista from '../cadastros/pessoa/PessoasLista'
import PessoaMostrar from '../cadastros/pessoa/PessoaMostrar'
import Empreendimentos from '../cadastros/empreendimentos/Empreendimentos'
import EmpreendimentosLista from '../cadastros/empreendimentos/EmpreendimentosLista'
import PoEmpreendimentoAll from '../cadastros/portal/PoEmpreendimentoAll'
import PoEmpreendimentosLista from '../cadastros/portal/PoEmpreendimentosLista'
import PoEmpreendimentoDoctos from '../cadastros/portal/PoEmpreendimentoDoctos'
import PoEmpreendimentoBlocos from '../cadastros/portal/PoEmpreendimentoBlocos'
import PoEmpreendimentoUnidadePlantas from '../cadastros/portal/PoEmpreendimentoUnidadePlantas'
import Intranet from '../intranet/Intranet'
import Erp from '../erp/Erp'

const Rotas = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Intranet} />
        <Route exact path="/telefone" component={TelefonesLista} />
        <Route exact path="/erp" component={Entrada} />
        <Route exact path="/principal" component={Entrada} />
        {/* Pessoa */}
        <Route exact path="/pessoa/pessoasLista" component={PessoasLista} />
        <Route exact path="/pessoa/pessoadados" component={PessoaDados} />
        <Route exact path="/pessoadados_A" component={PessoaDados_A} />
        <Route exact path="/dados/editar/:id" component={PessoaDados} />
        <Route exact path="/pessoa/mostrar/:id" component={PessoaMostrar} />
        {/* Empreendimento */}
        <Route exact path="/empreendimento/empreendimentosLista" component={EmpreendimentosLista} />
        <Route exact path="/empreendimentos" component={Empreendimentos} />
        {/* Portal */}
        <Route exact path="/portal/poempreendimentoall" component={PoEmpreendimentoAll} />
        <Route exact path="/portal/poempreendimentoslista" component={PoEmpreendimentosLista} />
        <Route exact path="/portal/poempreendimentodoctos" component={PoEmpreendimentoDoctos} />
        <Route exact path="/portal/poempreendimentoblocos" component={PoEmpreendimentoBlocos} />
        <Route exact path="/portal/poempreendimentounidadeplantas" component={PoEmpreendimentoUnidadePlantas} />
      </Switch>
    </div>
  )
}

export default Rotas