//product of helping https://github.com/CaptainChicky/ with his thing
//credits for this idea go to him 

//define mappings between dna, mrna and amino acids
//this completely mitigates the need for a massive block of elifs
const DNAtoMRNA = {
  T: 'A', 
  A: 'U', 
  C: 'G', 
  G: 'C'
};
const aminoToRNA= {
  UUU: 'PHE', UUC: 'PHE', 
  UUA: 'LEU', UUG: 'LEU', CUU: 'LEU', CUC: 'LEU', CUA: 'LEU', CUG: 'LEU',  
  AUG: 'MET', 
  AUU: 'ILE', AUC: 'ILE', AUA: 'ILE', 
  GUU: 'VAL', GUC: 'VAL', GUA: 'VAL', GUG: 'VAL', 
  UCU: 'SER', UCC: 'SER', UCA: 'SER', UCG: 'SER', AGU: 'SER', AGC: 'SER', 
  CCU: 'PRO', CCC: 'PRO', CCA: 'PRO', CCG: 'PRO', 
  ACU: 'THR', ACC: 'THR', ACA: 'THR', ACG: 'THR',
  GCU: 'ALA', GCC: 'ALA', GCA: 'ALA', GCG: 'ALA',
  UAU: 'TYR', UAC: 'TYR',
  UAA: 'STOP', UAG: 'STOP', UGA: 'STOP',
  CAU: 'HIS', CAC: 'HIS',
  CAA: 'GLN', CAG: 'GLN',
  AAU: 'ASN', AAC: 'ASN',
  AAA: 'LYS', AAG: 'LYS',
  GAU: 'ASP', GAC: 'ASP',
  GAA: 'GLU', GAG: 'GLU',
  UGU: 'CYS', UGC: 'CYS',
  UGG: 'TRP',
  CGU: 'ARP', CGC: 'ARP', CGA: 'ARP', CGG: 'ARP',
  AGA: 'ARG', AGG: 'ARG',
  GGU: 'GLY', GGC: 'GLY', GGA: 'GLY', GGG: 'GLY'
}

//define buffer vars
//var rawDNA = "tacgactgggtcatcgtacgctgggggatc";
var MRNAbuffer= "";
var aminoMapped= "";

//step 1: translation from dna to mrna sequence using defined mapping
//this function is called on button press, hence no need to explicitly run it 
function mrnaConv(){
  //define var rawDNA as the internal (entered) value of textbox element "dna_input"
  var rawDNA= document.getElementById("dna_input").value;
  
  for (var i=0; i < rawDNA.length; i++) {
    //appending to MRNAbuffer, after reading from rawDNA[i] using character as named index 
    MRNAbuffer+= DNAtoMRNA[rawDNA[i].toUpperCase()];
  }
  //return MRNAbuffer;
  //chaining next function
  toAmino();
}

//step 2: conversion from mrna to protein sequence
function toAmino(){
  for (var i=0; i < MRNAbuffer.length; i+=3) {
    //appending to aminoMapped, after extracting every 3 chars from str MRNAbuffer and used to index the mapping aminotoRNA
    aminoMapped+= aminoToRNA[MRNAbuffer.substr(i, 3)]+'\n';
  }
  console.log(aminoMapped);
  //now in context of the DOM, append a div and populate with result
  resultDiv= document.getElementById('result');
  resultDiv.append("Result: "+aminoMapped);
}
