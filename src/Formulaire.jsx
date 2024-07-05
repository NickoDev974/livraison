import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";

const FormInput = ({ label, type = "text", value, onChange, name }) => (
  <div className="form-input">
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} name={name} />
    </label>
  </div>
);

const FormCheckbox = ({ label, checked, onChange, name }) => (
  <div className="form-checkbox">
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      {label}
    </label>
  </div>
);

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    adresse: "",
    codePostal: "",
    ville: "",
    RDC: false,
    appart: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const formRef = useRef();

  return (
    <div>
      <div className="header">
        <h1>Univers Aquatique Livraison</h1>
        <img className="logo" src="/livraison/no-pict.jpg" alt="No Pict" />

        {/* <img className="logo" src="../../../public/no-pict.jpg" /> */}
      </div>
      <form ref={formRef}>
        <section className="client">
          <h2>Informations Client</h2>
          <div>
            <FormInput
              label="➡️ Nom:"
              value={formData.nom}
              onChange={handleChange}
              name="nom"
            />
            <FormInput
              label="➡️ Prénom:"
              value={formData.prenom}
              onChange={handleChange}
              name="prenom"
            />
            <FormInput
              label="📞 Téléphone:"
              type="tel"
              value={formData.telephone}
              onChange={handleChange}
              name="telephone"
            />
            <FormInput
              label="📬 Adresse:"
              value={formData.adresse}
              onChange={handleChange}
              name="adresse"
            />
            <FormInput
              label="➡️ Code Postal:"
              type="text"
              value={formData.codePostal}
              onChange={handleChange}
              name="codePostal"
            />
            <FormInput
              label="➡️ Ville:"
              value={formData.ville}
              onChange={handleChange}
              name="ville"
            />
          </div>
        </section>
        <section className="livraison">
          <h2>Détails de la Livraison</h2>
          <div>
            <FormInput
              label="Nombre de personnes pour aider le livreur:"
              value={formData.nbrPersonnes}
              onChange={handleChange}
              name="nbrPersonnes"
            />
            <FormInput
              label="Montant de la livraison :"
              value={formData.coutLivraison}
              onChange={handleChange}
              name="coutLivraison"
            />
            <FormCheckbox
              label="Maison de plein pied"
              checked={formData.RDC}
              onChange={handleChange}
              name="RDC"
            />
            <FormCheckbox
              label="Appartement à étage"
              checked={formData.appart}
              onChange={handleChange}
              name="appart"
            />
            <FormCheckbox
              label="L'emplassement futur du produit est accessible "
              checked={formData.acces}
              onChange={handleChange}
              name="acces"
            />
          </div>
        </section>
      </form>
      <section className="juridique">
        <article>
          <h2>
            Clause de Décharge de Responsabilité pour les Dommages de Livraison
          </h2>
          <h3>Article 1 : Objet de la Clause</h3>
          <p>
            Cette clause a pour objet de définir les responsabilités respectives
            de l'Entreprise et du Client en cas de dommages subis par les
            marchandises lors de la livraison.
          </p>
          <h3>Article 2 : Transfert de Responsabilité</h3>
          <p>
            La responsabilité de l'Entreprise en ce qui concerne les
            marchandises livrées cesse dès que celles-ci ont été déchargées du
            véhicule de livraison et mises à disposition du Client à l'adresse
            de livraison spécifiée.
          </p>
          <h3>Article 3 : Décharge de l'Entreprise</h3>
          <p>
            À partir du moment où les marchandises sont sorties du camion de
            livraison :<br /> - L'Entreprise décline toute responsabilité pour
            tout dommage, perte ou détérioration des marchandises, quels qu'en
            soient la nature et les causes.
            <br /> - Le Client assume l'entière responsabilité pour tout
            dommage, perte ou détérioration pouvant survenir aux marchandises.
          </p>
          <h3>Article 4 : Inspection des Marchandises</h3>
          <p>
            Il est de la responsabilité du Client d'inspecter les marchandises
            immédiatement après leur déchargement. Toute réclamation concernant
            des dommages visibles doit être signalée par écrit à l'Entreprise
            dans un délai de 24 heures suivant la livraison. Passé ce délai,
            aucune réclamation ne sera acceptée par l'Entreprise.
          </p>
          <h3>Article 5 : Exclusions</h3>
          <p>
            Cette clause de décharge de responsabilité ne s'applique pas en cas
            de faute intentionnelle ou de négligence grave de la part des
            employés de l'Entreprise lors du processus de déchargement des
            marchandises.
          </p>
          <h3>Article 6 : Acceptation des Conditions</h3>
          <p>
            En acceptant les présentes conditions de livraison, le Client
            reconnaît avoir pris connaissance de cette clause de décharge de
            responsabilité et en accepte les termes sans réserve.
          </p>
          Signature du Client : ______________________ Date : _______________
        </article>
      </section>
      <ReactToPrint
        trigger={() => <button type="button">Imprimer</button>}
        content={() => formRef.current}
      />
    </div>
  );
};

export default Formulaire;
