package gw.specContrib.classes.property_Declarations.javaClassGosuSubClass

uses java.util.ArrayList

class Errant_GosuSub_TypeDisagreement_Generics_6 extends Errant_JavaSuper_TypeDisagreement_Generics_6 {
  //Case 6 : Conflict check with disagreement on parameter type

    //IDE-1817 Parser issue. Should show error here. shows at the package line on top
    var list1 : ArrayList<String> as MyProperty1    //## issuekeys: ERROR

    property set MyProperty2(a : ArrayList<String>){}      //## issuekeys: 'SETMYPROPERTY2(ARRAYLIST<STRING>)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.PROPERTIES.PREPARINGFORPUSH.JAVACLASSGOSUSUBCLASS.ERRANT_GOSUSUB_TYPEDISAGREEMENT_GENERICS_6' CLASHES WITH 'SETMYPROPERTY2(ARRAYLIST<INTEGER>)' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.PROPERTIES.PREPARINGFORPUSH.JAVACLASSGOSUSUBCLASS.ERRANT_JAVASUPER_TYPEDISAGREEMENT_GENERICS_6'; BOTH METHODS HAVE SAME ERASURE, YET NEITHER OVERRIDES THE OTHER

    var list3 : ArrayList<String> as MyProperty3      //## issuekeys: INVALID PROPERTY DECLARATION: GETTER AND SETTER SHOULD AGREE ON THE TYPE OF THE PROPERTY

    property get MyProperty4() : ArrayList<String> { return null }      //## issuekeys: 'GETMYPROPERTY4()' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.PROPERTIES.PREPARINGFORPUSH.JAVACLASSGOSUSUBCLASS.ERRANT_GOSUSUB_TYPEDISAGREEMENT_GENERICS_6' CLASHES WITH 'GETMYPROPERTY4()' IN 'GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.PROPERTIES.PREPARINGFORPUSH.JAVACLASSGOSUSUBCLASS.ERRANT_JAVASUPER_TYPEDISAGREEMENT_GENERICS_6'; ATTEMPTING TO USE INCOMPATIBLE RETURN TYPE

}