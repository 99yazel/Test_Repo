import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Tooltip, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Divider, CircularProgress, Paper, Container, Button, createMuiTheme, TextField as TextField$1, Tabs, Tab, FormControl, FormLabel, FormHelperText, ButtonGroup as ButtonGroup$1, FormControlLabel, Checkbox as Checkbox$1, InputLabel, InputAdornment, Select, MenuItem, OutlinedInput, Chip, TableSortLabel, TableBody, TableContainer, Accordion, AccordionDetails, AccordionSummary, FormGroup, Backdrop, Dialog, DialogTitle, DialogActions, DialogContent, Table as Table$1, TableRow as TableRow$1, TableCell as TableCell$1, DialogContentText } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import useTranslation from 'next-translate/useTranslation';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteIcon from '@material-ui/icons/Delete';
import DocumentIcon from '@material-ui/icons/Description';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LinkedInLogo from '@material-ui/icons/LinkedIn';
import TwitterLogo from '@material-ui/icons/Twitter';
import styled, { css } from 'styled-components';
import Link$1 from 'next/link';
import TextField from '@material-ui/core/TextField';
import { Autocomplete, createFilterOptions, Skeleton } from '@material-ui/lab';
import { useField, Form as Form$1, useFormikContext, Formik } from 'formik';
import { generateSlug, getErrorMessage, dateFormat, dateTimeFormat, timeFormat, getObjectKeyByString, removeFromArray, removeFromObjectArray, isServer as isServer$1, isDev } from 'inventhora-utils';
import { ColorPicker } from 'material-ui-color';
import { LocalizationProvider, DatePicker, DateTimePicker, TimePicker } from '@material-ui/pickers';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import esLocale from 'date-fns/locale/es';
import ptLocale from 'date-fns/locale/pt';
import PlusIcon from '@material-ui/icons/AddCircle';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MaUTable from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/router';
import PlusIcon$1 from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

var BooleanIcon = function BooleanIcon(_ref) {
  var value = _ref.value;
  return value ? React.createElement(CheckIcon, null) : React.createElement(CloseIcon, null);
};

var DarkmodeSwitch = function DarkmodeSwitch(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement(Tooltip, {
    title: t('common:toggleDarkMode')
  }, React.createElement(IconButton, {
    onClick: function onClick() {
      return onChange(value);
    }
  }, value ? React.createElement(Brightness4Icon, null) : React.createElement(BrightnessHighIcon, null)));
};

var DocumentViewer = function DocumentViewer(_ref) {
  var documents = _ref.documents,
      onDelete = _ref.onDelete,
      _ref$canDownload = _ref.canDownload,
      canDownload = _ref$canDownload === void 0 ? true : _ref$canDownload,
      canView = _ref.canView;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement(List, null, documents.map(function (document, ind) {
    return React.createElement(React.Fragment, null, React.createElement(ListItem, null, React.createElement(ListItemAvatar, null, React.createElement(DocumentIcon, null)), React.createElement(ListItemText, null, document.name), React.createElement(ListItemSecondaryAction, null, canView && React.createElement(Tooltip, {
      title: t('common:viewTitle', {
        name: t('common:document')
      })
    }, React.createElement("a", {
      href: document.url,
      target: '_blank'
    }, React.createElement(IconButton, null, React.createElement(VisibilityIcon, null)))), canDownload && React.createElement(Tooltip, {
      title: t('common:downloadTitle', {
        name: t('common:document')
      })
    }, React.createElement("a", {
      href: document.url,
      download: true
    }, React.createElement(IconButton, null, React.createElement(DownloadIcon, null)))), onDelete && React.createElement(Tooltip, {
      title: t('common:deletionTitle', {
        name: t('common:document')
      })
    }, React.createElement(IconButton, {
      onClick: function onClick() {
        return onDelete(document);
      }
    }, React.createElement(DeleteIcon, null))))), ind !== documents.length - 1 && React.createElement(Divider, null));
  }));
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _excluded = ["href", "as", "children"];

var _templateObject;
var ABlank = /*#__PURE__*/styled.a(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  text-decoration: none;\n  color: inherit;\n"])));

var Link = function Link(_ref) {
  var href = _ref.href,
      as = _ref.as,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return React.createElement(Link$1, {
    passHref: true,
    href: href,
    as: as
  }, React.createElement(ABlank, Object.assign({}, props), children));
};

var Wave = function Wave(_ref) {
  _objectDestructuringEmpty(_ref);

  return React.createElement("svg", {
    style: {
      marginBottom: -8
    },
    version: '1.1',
    viewBox: '0 0 1440 158.28'
  }, React.createElement("g", {
    transform: 'translate(-3.3458 -221.1)'
  }, React.createElement("path", {
    fill: '#3c9f80',
    d: 'm1163.9 221.1c-32.19 0.0654-63.508 1.703-92.584 4.9707-64.986 7.3035-131.71 21.35-261 54.945-105.54 27.424-136.83 34.577-174.5 39.891-43.619 6.1529-70.435 7.9773-117 7.9629-64.928-0.0201-89.192-2.3345-213.5-20.377-110.65-16.06-153.97-22.996-193.2-30.93-28.942-5.8535-43.718-9.8122-107.05-28.689-1.4743-0.43942-1.698 12.898-1.7324 130.5h1440v-113.39l-25.83-9.3457c-26.952-9.7527-43.121-14.22-69.168-19.109-58.322-10.947-122.96-16.555-184.42-16.43z'
  })));
};

var _templateObject$1, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Wrapper = /*#__PURE__*/styled.div(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin-top: 50px;\n  position: relative;\n"])));
var Content = /*#__PURE__*/styled.footer(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  display: flex;\n  justify-content: space-around;\n  margin-top: -20px;\n  padding-bottom: 50px;\n\n  @media (max-width: 767px) {\n    flex-direction: column-reverse;\n    align-items: center;\n    margin-top: 0;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
});
var SocialSection = /*#__PURE__*/styled.div(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: white;\n  display: flex;\n  align-items: flex-end;\n"])));
var SocialLink = /*#__PURE__*/styled.a(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: white;\n  margin: 0 10px;\n"])));
var ItemSection = /*#__PURE__*/styled.div(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  @media (max-width: 767px) {\n    align-items: center;\n  }\n"])));
var FooterLink = /*#__PURE__*/styled.a(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: white;\n  cursor: pointer;\n  margin: 15px 0;\n  font-size: 18px;\n  text-decoration: none;\n\n  :hover {\n    text-decoration: underline;\n  }\n"])));
var StyledLink = /*#__PURE__*/styled(Link)(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: white;\n  cursor: pointer;\n  margin: 15px 0;\n  font-size: 18px;\n  text-decoration: none;\n\n  :hover {\n    text-decoration: underline;\n  }\n"])));
var Copyright = /*#__PURE__*/styled.span(_templateObject8 || (_templateObject8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: white;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 500px;\n  text-align: center;\n\n  @media (max-width: 840px) {\n    width: 300px;\n  }\n"])));

var Footer = function Footer(props) {
  var _useTranslation = useTranslation(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var items = [[{
    label: t('common:whatsNew'),
    path: '/changelog'
  }, {
    label: t('common:roadmap'),
    path: '/roadmap'
  }, {
    label: t('common:requestFeature'),
    path: '/feature-request'
  }], [{
    label: t('common:privacyPolicy'),
    path: '/privacy'
  }, {
    label: t('common:terms'),
    path: '/terms'
  }, {
    label: t('common:cookiePolicy'),
    path: '/cookies'
  }]];
  return React.createElement(Wrapper, Object.assign({}, props), React.createElement(Wave, null), React.createElement(Content, null, React.createElement(SocialSection, null, React.createElement(SocialLink, {
    id: 'twitter-link',
    rel: 'noreferrer',
    style: {
      color: 'white'
    },
    target: '_blank',
    href: 'https://twitter.com/inventhora'
  }, React.createElement(TwitterLogo, {
    fontSize: 'large'
  })), React.createElement(SocialLink, {
    id: 'linkedin-link',
    rel: 'noreferrer',
    style: {
      color: 'white'
    },
    target: '_blank',
    href: 'https://www.linkedin.com/company/inventhora'
  }, React.createElement(LinkedInLogo, {
    fontSize: 'large'
  }))), items.map(function (item, ind) {
    return React.createElement(ItemSection, {
      key: ind
    }, item.map(function (_ref2, ind) {
      var label = _ref2.label,
          path = _ref2.path;

      if (process.env.BASE_URL === 'https://inventhora.com') {
        return React.createElement(StyledLink, {
          key: ind,
          href: path
        }, label);
      }

      return React.createElement(FooterLink, {
        key: ind,
        href: "https://inventhora.com/" + lang + path
      }, label);
    }));
  })), React.createElement(Copyright, null, t('common:copyright')));
};

var _templateObject$2, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1;
var Loader = /*#__PURE__*/styled(CircularProgress)(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n  z-index: 9999;\n\n  @media (max-width: 767px) {\n    bottom: initial;\n    top: 5px;\n    left: 80px;\n  }\n"])));
var Title = /*#__PURE__*/styled.h1(_templateObject2$1 || (_templateObject2$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin: 0;\n"])));
var Header = /*#__PURE__*/styled.div(_templateObject3$1 || (_templateObject3$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"])));
var SameLine = /*#__PURE__*/styled.div(_templateObject4$1 || (_templateObject4$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  width: 100%;\n  align-items: center;\n  .MuiTextField-root {\n    :not(:last-child) {\n      margin-right: 20px;\n    }\n    width: 100%;\n  }\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n\n    .MuiTextField-root {\n      :not(:last-child) {\n        margin-right: initial;\n        margin-bottom: 20px;\n      }\n    }\n  }\n"])));
var BoldText = /*#__PURE__*/styled.span(_templateObject5$1 || (_templateObject5$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-weight: bold;\n  margin-right: 5px;\n"])));
var InfoWrapper = /*#__PURE__*/styled.li(_templateObject6$1 || (_templateObject6$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  list-style: none;\n  font-size: 16px;\n  line-height: 2;\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: 5px;\n  }\n"])));
var Info = function Info(_ref) {
  var name = _ref.name,
      value = _ref.value,
      Icon = _ref.Icon;
  if (!value) return null;
  return React.createElement(InfoWrapper, null, Icon && React.createElement(Icon, null), name, ": ", React.createElement(BoldText, null, ' ' + value));
};
var StyledPaper = /*#__PURE__*/styled(Paper)(_templateObject7$1 || (_templateObject7$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  padding: 20px;\n"])));
var PageWrapper = function PageWrapper(_ref2) {
  var children = _ref2.children,
      title = _ref2.title,
      _ref2$maxWidth = _ref2.maxWidth,
      maxWidth = _ref2$maxWidth === void 0 ? 'md' : _ref2$maxWidth,
      actionLabel = _ref2.actionLabel,
      onClick = _ref2.onClick;
  return React.createElement(Container, {
    maxWidth: maxWidth
  }, React.createElement(StyledPaper, null, actionLabel && onClick ? React.createElement(Header, null, React.createElement(Title, null, title), React.createElement(Button, {
    variant: 'contained',
    color: 'secondary',
    onClick: onClick
  }, actionLabel)) : React.createElement(Title, null, title), children));
};
var ABlank$1 = /*#__PURE__*/styled.a(_templateObject8$1 || (_templateObject8$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  text-decoration: none;\n  color: inherit;\n"])));
var getTheme = function getTheme(darkMode) {
  return createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3c9f80'
      },
      secondary: {
        main: '#3f51b5'
      }
    },
    overrides: {
      MuiContainer: {
        root: {
          paddingBottom: '10px'
        }
      },
      MuiTableRow: {
        root: {
          height: '45px'
        }
      },
      MuiTableFooter: {
        root: {
          position: 'absolute',
          bottom: 0,
          right: 0
        }
      },
      MuiToolbar: {
        root: {
          minHeight: '45px'
        }
      },
      MuiTableCell: {
        head: {
          whiteSpace: 'nowrap'
        },
        root: {
          padding: '5px',
          textAlign: 'center'
        }
      },
      MuiIconButton: {
        root: {
          padding: '5px',
          '&:hover': {
            color: '#3c9f80'
          }
        }
      },
      MuiDialogActions: {
        root: {
          alignSelf: 'flex-end'
        }
      }
    }
  });
};

var _excluded$1 = ["options", "label", "helperText", "required", "freeSolo", "name", "getOptionLabel", "index", "subName", "disabled", "onCreate", "autoFocus", "onChange", "loading"];
var filter = /*#__PURE__*/createFilterOptions();

var ComboBox = function ComboBox(_ref) {
  var options = _ref.options,
      label = _ref.label,
      helperText = _ref.helperText,
      required = _ref.required,
      freeSolo = _ref.freeSolo,
      name = _ref.name,
      _ref$getOptionLabel = _ref.getOptionLabel,
      _getOptionLabel = _ref$getOptionLabel === void 0 ? function (option) {
    return option;
  } : _ref$getOptionLabel,
      index = _ref.index,
      subName = _ref.subName,
      disabled = _ref.disabled,
      onCreate = _ref.onCreate,
      autoFocus = _ref.autoFocus,
      _onChange = _ref.onChange,
      loading = _ref.loading,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  var isLoading = !disabled && (loading || !Array.isArray(options));
  return React.createElement(Autocomplete, Object.assign({
    id: generateSlug(formName),
    style: {
      width: '100%'
    }
  }, rest, {
    value: meta.value || null,
    onChange: function onChange(_, value) {
      _onChange && _onChange(value);

      if (onCreate && value && value.inputValue) {
        onCreate(value.inputValue);
      } else {
        helper.setValue(value || '');
      }
    },
    onInputChange: function onInputChange(_e, value) {
      if (freeSolo) {
        helper.setValue(value || '');
      }
    },
    selectOnFocus: true,
    disabled: disabled,
    freeSolo: freeSolo,
    options: isLoading || !options ? [] : options,
    loading: isLoading,
    filterOptions: function filterOptions(options, params) {
      if (freeSolo) {
        params.inputValue = meta.value;
      }

      var filtered = filter(options, params);

      if (onCreate && filtered.length === 0 && params.inputValue !== '') {
        filtered.push({
          inputValue: params.inputValue,
          inputTitle: "Add \"" + params.inputValue + "\""
        });
      }

      return filtered;
    },
    getOptionLabel: function getOptionLabel(option) {
      var _option$inputTitle;

      return (_option$inputTitle = option == null ? void 0 : option.inputTitle) != null ? _option$inputTitle : _getOptionLabel(option);
    },
    renderInput: function renderInput(params) {
      return React.createElement(TextField, Object.assign({
        margin: 'dense',
        variant: 'outlined'
      }, params, {
        autoFocus: autoFocus,
        label: label,
        disabled: disabled,
        helperText: meta.error ? getErrorMessage(meta.error) : helperText,
        fullWidth: true,
        required: required,
        error: Boolean(meta.error),
        InputProps: _extends({}, params.InputProps, {
          endAdornment: React.createElement(React.Fragment, null, isLoading ? React.createElement(CircularProgress, {
            color: 'inherit',
            size: 20
          }) : null, params.InputProps.endAdornment)
        })
      }));
    }
  }));
};

var _excluded$2 = ["name", "index", "subName", "helperText", "variant", "style", "onChange", "error"];

var TextInput = function TextInput(_ref) {
  var _meta$error;

  var name = _ref.name,
      index = _ref.index,
      subName = _ref.subName,
      helperText = _ref.helperText,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      style = _ref.style,
      _onChange = _ref.onChange,
      error = _ref.error,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      field = _useField[0],
      meta = _useField[1];

  return React.createElement(TextField$1, Object.assign({
    id: generateSlug(formName)
  }, rest, field, {
    type: 'text',
    margin: 'dense',
    onChange: function onChange(e) {
      field.onChange(e);
      _onChange && _onChange(e);
    },
    style: style != null ? style : {
      width: '100%'
    },
    variant: variant,
    helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
    error: Boolean(meta.error) || error
  }));
};

var _templateObject$3, _templateObject2$2;
var Wrapper$1 = /*#__PURE__*/styled.div(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin-bottom: 10px;\n  width: 100%;\n\n  > *:not(label) {\n    margin: 8px 0;\n  }\n"])));
var ZipInput = /*#__PURE__*/styled(TextInput)(_templateObject2$2 || (_templateObject2$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 30% !important;\n\n  @media (max-width: 767px) {\n    width: 100% !important;\n  }\n"])));

var AddressInput = function AddressInput(_ref) {
  var _ref$withBilling = _ref.withBilling,
      withBilling = _ref$withBilling === void 0 ? true : _ref$withBilling,
      countries = _ref.countries;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var _useState = useState(0),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  if (!withBilling) {
    return React.createElement(Wrapper$1, null, React.createElement(TextInput, {
      name: 'address1',
      label: t('forms:address1')
    }), React.createElement(TextInput, {
      name: 'address2',
      label: t('forms:address2')
    }), React.createElement(SameLine, null, React.createElement(TextInput, {
      name: 'city',
      label: t('forms:city')
    }), React.createElement(ZipInput, {
      name: 'zip',
      label: t('forms:zip')
    })), React.createElement(SameLine, null, React.createElement(TextInput, {
      name: 'state',
      label: t('forms:state')
    }), React.createElement(ComboBox, {
      label: t('forms:country'),
      options: countries.map(function (country) {
        var _country$translations;

        return (_country$translations = country.translations[lang]) != null ? _country$translations : country.translations.en;
      }),
      name: 'country'
    })));
  }

  return React.createElement(Wrapper$1, null, React.createElement(Tabs, {
    style: {
      width: '100%',
      marginBottom: 10
    },
    variant: 'fullWidth',
    value: currentPage,
    onChange: function onChange(_, value) {
      return setCurrentPage(value);
    }
  }, React.createElement(Tab, {
    label: t('forms:address'),
    value: 0
  }), React.createElement(Tab, {
    label: t('forms:billingAddress'),
    value: 1
  })), currentPage === 0 && React.createElement(React.Fragment, null, React.createElement(TextInput, {
    name: 'address1',
    label: t('forms:address1')
  }), React.createElement(TextInput, {
    name: 'address2',
    label: t('forms:address2')
  }), React.createElement(SameLine, null, React.createElement(TextInput, {
    name: 'city',
    label: t('forms:city')
  }), React.createElement(ZipInput, {
    name: 'zip',
    label: t('forms:zip')
  })), React.createElement(SameLine, null, React.createElement(TextInput, {
    name: 'state',
    label: t('forms:state')
  }), React.createElement(ComboBox, {
    label: t('forms:country'),
    options: countries.map(function (country) {
      var _country$translations2;

      return (_country$translations2 = country.translations[lang]) != null ? _country$translations2 : country.translations.en;
    }),
    name: 'country'
  }))), currentPage === 1 && React.createElement(React.Fragment, null, React.createElement(TextInput, {
    name: 'billingAddressLine1',
    label: t('forms:address1')
  }), React.createElement(TextInput, {
    name: 'billingAddressLine2',
    label: t('forms:address2')
  }), React.createElement(SameLine, null, React.createElement(TextInput, {
    name: 'billingCity',
    label: t('forms:city')
  }), React.createElement(ZipInput, {
    name: 'billingZip',
    label: t('forms:zip')
  })), React.createElement(SameLine, null, React.createElement(TextInput, {
    name: 'billingState',
    label: t('forms:state')
  }), React.createElement(ComboBox, {
    name: 'billingCountry',
    label: t('forms:country'),
    options: countries.map(function (country) {
      var _country$translations3;

      return (_country$translations3 = country.translations[lang]) != null ? _country$translations3 : country.translations.en;
    })
  }))));
};

var _templateObject$4;
var ButtonWrapper = /*#__PURE__*/styled(ButtonGroup$1)(_templateObject$4 || (_templateObject$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin: 10px 0;\n\n  button {\n    flex: 1;\n    padding: 20px 0;\n  }\n"])));

var ButtonGroup = function ButtonGroup(_ref) {
  var options = _ref.options,
      value = _ref.value,
      name = _ref.name,
      subName = _ref.subName,
      index = _ref.index,
      _onClick = _ref.onClick,
      label = _ref.label,
      helperText = _ref.helperText,
      required = _ref.required,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size;
  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  var id = name ? generateSlug(name) : generateSlug(label);
  return React.createElement(FormControl, {
    required: required,
    fullWidth: true
  }, React.createElement(FormLabel, {
    htmlFor: id
  }, label), React.createElement(ButtonWrapper, {
    "aria-label": label,
    variant: 'contained',
    size: size,
    color: 'primary',
    id: id
  }, options.map(function (option, ind) {
    return React.createElement(Button, {
      disabled: value && value === option.value || formName && option.value === meta.value,
      key: ind,
      onClick: function onClick() {
        _onClick && _onClick(option.value);
        formName && helper.setValue(option.value);
      }
    }, option.label);
  })), helperText && React.createElement(FormHelperText, null, helperText));
};

var _excluded$3 = ["name", "label", "helperText", "required", "index", "subName"];

var Checkbox = function Checkbox(_ref) {
  var _meta$error;

  var name = _ref.name,
      label = _ref.label,
      helperText = _ref.helperText,
      required = _ref.required,
      index = _ref.index,
      subName = _ref.subName,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      field = _useField[0],
      meta = _useField[1];

  return React.createElement(FormControlLabel, {
    id: generateSlug(name),
    style: {
      alignSelf: 'start',
      margin: '10px 0'
    },
    control: React.createElement(Checkbox$1, Object.assign({}, rest, {
      checked: field.value
    }, field)),
    label: React.createElement(React.Fragment, null, label, required ? ' *' : '', (helperText || meta.error) && React.createElement(FormHelperText, {
      error: Boolean(meta.error)
    }, (_meta$error = meta.error) != null ? _meta$error : helperText))
  });
};

var ColorInput = function ColorInput(_ref) {
  var _meta$error;

  var name = _ref.name,
      helperText = _ref.helperText,
      subName = _ref.subName,
      index = _ref.index,
      label = _ref.label,
      required = _ref.required,
      _onChange = _ref.onChange;
  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helpers = _useField[2];

  return React.createElement(FormControl, {
    error: Boolean(meta.error),
    id: generateSlug(formName),
    style: {
      width: '100%'
    },
    required: required
  }, React.createElement(InputLabel, {
    style: {
      transform: 'initial',
      position: 'relative',
      marginBottom: 5
    },
    id: generateSlug(formName) + "-label"
  }, label), React.createElement(ColorPicker, {
    value: meta.value,
    onChange: function onChange(val) {
      helpers.setValue(val);
      _onChange && _onChange(val);
    },
    defaultValue: 'transparent'
  }), React.createElement(FormHelperText, null, (_meta$error = meta.error) != null ? _meta$error : helperText));
};

var localeMap = {
  en: enLocale,
  es: esLocale,
  pt: ptLocale,
  de: deLocale
};

var DateTimeProvider = function DateTimeProvider(_ref) {
  var children = _ref.children,
      lang = _ref.lang;
  return React.createElement(LocalizationProvider, {
    locale: localeMap[lang],
    dateAdapter: DateFnsAdapter
  }, children);
};

var DateInput = function DateInput(_ref) {
  var _meta$value;

  var name = _ref.name,
      index = _ref.index,
      subName = _ref.subName,
      label = _ref.label,
      helperText = _ref.helperText,
      required = _ref.required,
      disabled = _ref.disabled;

  var _useTranslation = useTranslation(),
      lang = _useTranslation.lang;

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  return React.createElement(DateTimeProvider, {
    lang: lang
  }, React.createElement(DatePicker, {
    disabled: disabled,
    value: (_meta$value = meta.value) != null ? _meta$value : null,
    onChange: function onChange(date) {
      if (!date) {
        return helper.setValue(null);
      }

      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      helper.setValue(date);
    },
    clearable: true,
    mask: '__.__.____',
    inputFormat: dateFormat,
    label: label,
    renderInput: function renderInput(props) {
      var _meta$error;

      return React.createElement(TextField$1, Object.assign({
        margin: 'dense'
      }, props, {
        variant: 'outlined',
        error: Boolean(meta.error),
        helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
        required: required,
        style: {
          width: '100%'
        },
        id: generateSlug(formName)
      }));
    }
  }));
};

var DateTimeInput = function DateTimeInput(_ref) {
  var _meta$value;

  var name = _ref.name,
      index = _ref.index,
      subName = _ref.subName,
      label = _ref.label,
      helperText = _ref.helperText,
      required = _ref.required,
      disabled = _ref.disabled;

  var _useTranslation = useTranslation(),
      lang = _useTranslation.lang;

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  return React.createElement(DateTimeProvider, {
    lang: lang
  }, React.createElement(DateTimePicker, {
    value: (_meta$value = meta.value) != null ? _meta$value : null,
    onChange: function onChange(date) {
      return helper.setValue(date || null);
    },
    disabled: disabled,
    clearable: true,
    ampm: false,
    mask: '__.__.____ __:__',
    inputFormat: dateTimeFormat,
    label: label,
    renderInput: function renderInput(props) {
      var _meta$error;

      return React.createElement(TextField$1, Object.assign({
        margin: 'dense'
      }, props, {
        variant: 'outlined',
        error: Boolean(meta.error),
        helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
        required: required,
        style: {
          width: '100%'
        },
        id: generateSlug(formName)
      }));
    }
  }));
};

var _excluded$4 = ["name", "index", "subName", "helperText", "error", "variant"];

var EmailInput = function EmailInput(_ref) {
  var _meta$error;

  var name = _ref.name,
      index = _ref.index,
      subName = _ref.subName,
      helperText = _ref.helperText,
      error = _ref.error,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      field = _useField[0],
      meta = _useField[1];

  return React.createElement(TextField$1, Object.assign({
    margin: 'dense',
    id: generateSlug(formName),
    style: {
      width: '100%'
    }
  }, rest, field, {
    type: 'email',
    variant: variant,
    helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
    error: Boolean(meta.error) || error
  }));
};

var _templateObject$5;
var Form = /*#__PURE__*/styled(Form$1)(_templateObject$5 || (_templateObject$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  > *:not(label) {\n    margin: 8px 0;\n  }\n\n  > button {\n    margin: 20px 0;\n  }\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));

var _excluded$5 = ["options", "label", "helperText", "required", "name", "getOptionLabel", "index", "subName", "disabled", "autoFocus", "loading", "canCreate"];

var _templateObject$6;
var StyledButton = /*#__PURE__*/styled(IconButton)(_templateObject$6 || (_templateObject$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", ";\n"])), function (_ref) {
  var hasInput = _ref.hasInput;
  return hasInput === 1 ? 'color: #3c9f80 !important' : undefined;
});

var MultiCombobox = function MultiCombobox(_ref2) {
  var _meta$value;

  var options = _ref2.options,
      label = _ref2.label,
      helperText = _ref2.helperText,
      required = _ref2.required,
      name = _ref2.name,
      _ref2$getOptionLabel = _ref2.getOptionLabel,
      _getOptionLabel = _ref2$getOptionLabel === void 0 ? function (option) {
    return option;
  } : _ref2$getOptionLabel,
      index = _ref2.index,
      subName = _ref2.subName,
      disabled = _ref2.disabled,
      autoFocus = _ref2.autoFocus,
      loading = _ref2.loading,
      _ref2$canCreate = _ref2.canCreate,
      canCreate = _ref2$canCreate === void 0 ? true : _ref2$canCreate,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded$5);

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  var _useState = useState(''),
      input = _useState[0],
      setInput = _useState[1];

  var isLoading = !disabled && (loading || !Array.isArray(options));
  var value = (_meta$value = meta.value) != null ? _meta$value : [];
  return React.createElement(Autocomplete, Object.assign({
    multiple: true,
    id: generateSlug(formName),
    style: {
      width: '100%'
    }
  }, rest, {
    value: meta.value || [],
    selectOnFocus: true,
    disabled: disabled,
    freeSolo: canCreate,
    onChange: function onChange(_, value) {
      return helper.setValue(value || []);
    },
    options: isLoading || !options ? [] : options.filter(function (val) {
      var _meta$value2;

      return !Boolean(meta == null ? void 0 : (_meta$value2 = meta.value) == null ? void 0 : _meta$value2.find(function (metaVal) {
        return _getOptionLabel(val) === _getOptionLabel(metaVal);
      }));
    }),
    loading: isLoading,
    getOptionLabel: function getOptionLabel(option) {
      var _option$inputTitle;

      return (_option$inputTitle = option == null ? void 0 : option.inputTitle) != null ? _option$inputTitle : _getOptionLabel(option);
    },
    renderInput: function renderInput(params) {
      return React.createElement(TextField, Object.assign({
        margin: 'dense',
        variant: 'outlined'
      }, params, {
        autoFocus: autoFocus,
        label: label,
        disabled: disabled,
        helperText: meta.error ? getErrorMessage(meta.error) : helperText,
        fullWidth: true,
        onChange: function onChange(e) {
          setInput(e.target.value);
        },
        required: required,
        error: Boolean(meta.error),
        InputProps: _extends({}, params.InputProps, {
          endAdornment: React.createElement(React.Fragment, null, params.InputProps.endAdornment, isLoading ? React.createElement(CircularProgress, {
            color: 'inherit',
            size: 20
          }) : canCreate ? React.createElement(Tooltip, {
            open: Boolean(input),
            arrow: true,
            title: t('forms:add')
          }, React.createElement(StyledButton, {
            hasInput: Boolean(input) ? 1 : 0,
            onClick: function onClick() {
              if (input) {
                helper.setValue([].concat(value, [input]));
                setInput('');
              }
            }
          }, React.createElement(PlusIcon, null))) : null)
        })
      }));
    }
  }));
};

var _excluded$6 = ["name", "index", "subName", "helperText", "variant", "allowDecimals", "onChange", "error", "max"];

var NumberInput = function NumberInput(_ref) {
  var _meta$error;

  var name = _ref.name,
      index = _ref.index,
      subName = _ref.subName,
      helperText = _ref.helperText,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      allowDecimals = _ref.allowDecimals,
      _onChange = _ref.onChange,
      error = _ref.error,
      max = _ref.max,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  return React.createElement(TextField$1, Object.assign({
    margin: 'dense',
    id: generateSlug(formName)
  }, rest, {
    value: meta.value || '',
    onChange: function onChange(e) {
      _onChange && _onChange(e);

      if (max && Number(e.target.value) > max) {
        return helper.setValue(max);
      }

      helper.setValue(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      var _meta$value, _meta$value2, _meta$value2$split, _meta$value3, _meta$value3$split;

      //delete, tab, etc
      if ([8, 9, 37, 39].includes(e.keyCode)) {
        return;
      } //number keys


      if (e.keyCode >= 48 && e.keyCode <= 57) {
        return;
      } //numpad


      if (e.keyCode >= 96 && e.keyCode <= 105) {
        return;
      }

      if (allowDecimals && (e.keyCode === 190 || e.keyCode === 188) && meta != null && (_meta$value = meta.value) != null && _meta$value.split && (meta == null ? void 0 : (_meta$value2 = meta.value) == null ? void 0 : (_meta$value2$split = _meta$value2.split('.')) == null ? void 0 : _meta$value2$split.length) < 2 && (meta == null ? void 0 : (_meta$value3 = meta.value) == null ? void 0 : (_meta$value3$split = _meta$value3.split(',')) == null ? void 0 : _meta$value3$split.length) < 2) {
        return;
      }

      e.preventDefault();
    },
    inputMode: 'numeric',
    type: 'text',
    style: {
      width: '100%'
    },
    variant: variant,
    helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
    error: Boolean(meta.error) || error
  }));
};

var _excluded$7 = ["name", "index", "subName", "helperText", "error", "variant"];

var PasswordInput = function PasswordInput(_ref) {
  var _meta$error;

  var name = _ref.name,
      index = _ref.index,
      subName = _ref.subName,
      helperText = _ref.helperText,
      error = _ref.error,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$7);

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useState = useState(false),
      showPassword = _useState[0],
      setShowPassword = _useState[1];

  var _useField = useField(formName),
      field = _useField[0],
      meta = _useField[1];

  return React.createElement(TextField$1, Object.assign({
    margin: 'dense',
    id: generateSlug(formName)
  }, rest, field, {
    style: {
      width: '100%'
    },
    type: showPassword ? 'text' : 'password',
    variant: variant,
    helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
    error: Boolean(meta.error) || error,
    InputProps: {
      endAdornment: React.createElement(InputAdornment, {
        position: 'end'
      }, React.createElement(Tooltip, {
        title: showPassword ? t('common:hidePassword') : t('common:showPassword')
      }, React.createElement(IconButton, {
        tabIndex: -1,
        "aria-label": 'toggle password visibility',
        onClick: function onClick() {
          return setShowPassword(!showPassword);
        },
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        }
      }, showPassword ? React.createElement(VisibilityIcon, null) : React.createElement(VisibilityOffIcon, null))))
    }
  }));
};

var _excluded$8 = ["options", "label", "name", "helperText", "required", "index", "subName", "onChange", "disabledOptions"];

var SelectInput = function SelectInput(_ref) {
  var _meta$error;

  var options = _ref.options,
      label = _ref.label,
      name = _ref.name,
      helperText = _ref.helperText,
      required = _ref.required,
      index = _ref.index,
      subName = _ref.subName,
      _onChange = _ref.onChange,
      disabledOptions = _ref.disabledOptions,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$8);

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      field = _useField[0],
      meta = _useField[1];

  return React.createElement(FormControl, {
    margin: 'dense',
    error: Boolean(meta.error),
    required: required,
    variant: 'outlined',
    id: generateSlug(formName),
    style: {
      width: '100%'
    }
  }, React.createElement(InputLabel, {
    margin: 'dense',
    id: generateSlug(formName) + "-label"
  }, label), React.createElement(Select, Object.assign({
    margin: 'dense',
    variant: 'outlined',
    label: label,
    labelId: generateSlug(formName) + "-label"
  }, rest, field, {
    onChange: function onChange(e) {
      field.onChange(e);
      _onChange && _onChange(e.target.value);
    }
  }), React.createElement(MenuItem, {
    value: ''
  }, React.createElement("em", null, "--")), options.map(function (_ref2, ind) {
    var value = _ref2.value,
        label = _ref2.label;
    return React.createElement(MenuItem, {
      disabled: Boolean(disabledOptions == null ? void 0 : disabledOptions.find(function (option) {
        return option === value;
      })),
      key: ind,
      value: value
    }, React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: label
      }
    }));
  })), React.createElement(FormHelperText, {
    margin: 'dense',
    variant: 'outlined'
  }, (_meta$error = meta.error) != null ? _meta$error : helperText));
};

var _excluded$9 = ["loading", "children", "disabled", "onClick", "size", "style", "startIcon", "type", "variant", "color"];

var SubmitButton = function SubmitButton(_ref) {
  var loading = _ref.loading,
      children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      size = _ref.size,
      style = _ref.style,
      startIcon = _ref.startIcon,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'submit' : _ref$type,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$9);

  return React.createElement(Button, Object.assign({}, rest, {
    disabled: disabled || loading,
    variant: variant,
    size: size || 'medium',
    color: color,
    style: style,
    onClick: onClick,
    startIcon: startIcon,
    type: type
  }), loading ? React.createElement(CircularProgress, {
    size: 24
  }) : children);
};

var _excluded$a = ["name", "subName", "index", "helperText", "error", "variant", "rows"];

var TextAreaInput = function TextAreaInput(_ref) {
  var _meta$error;

  var name = _ref.name,
      subName = _ref.subName,
      index = _ref.index,
      helperText = _ref.helperText,
      error = _ref.error,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 4 : _ref$rows,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$a);

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      field = _useField[0],
      meta = _useField[1];

  return React.createElement(TextField$1, Object.assign({
    id: generateSlug(formName)
  }, rest, field, {
    type: 'text',
    margin: 'dense',
    style: {
      width: '100%'
    },
    multiline: true,
    rows: String(rows),
    variant: variant,
    helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
    error: Boolean(meta.error) || error
  }));
};

var _excluded$b = ["name", "index", "label", "subName", "helperText", "style", "required", "error"];

var _templateObject$7;
var StyledButton$1 = /*#__PURE__*/styled(IconButton)(_templateObject$7 || (_templateObject$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", ";\n  padding: 0;\n"])), function (_ref) {
  var hasInput = _ref.hasInput;
  return hasInput === 1 ? 'color: #3c9f80 !important' : undefined;
});

var TextListInput = function TextListInput(_ref2) {
  var _meta$value, _meta$error;

  var name = _ref2.name,
      index = _ref2.index,
      label = _ref2.label,
      subName = _ref2.subName,
      helperText = _ref2.helperText,
      style = _ref2.style,
      required = _ref2.required,
      error = _ref2.error,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded$b);

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var _useState = useState(''),
      input = _useState[0],
      setInput = _useState[1];

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  var value = (_meta$value = meta.value) != null ? _meta$value : [];
  return React.createElement(React.Fragment, null, React.createElement(FormControl, {
    margin: 'dense',
    error: Boolean(meta.error) || error,
    required: required,
    variant: 'outlined',
    style: style != null ? style : {
      width: '100%'
    }
  }, React.createElement(InputLabel, {
    margin: 'dense',
    variant: 'outlined',
    htmlFor: generateSlug(formName)
  }, label), React.createElement(OutlinedInput, Object.assign({
    margin: 'dense',
    label: label
  }, rest, {
    endAdornment: React.createElement(InputAdornment, {
      position: 'end'
    }, React.createElement(Tooltip, {
      open: Boolean(input),
      placement: 'right',
      arrow: true,
      title: t('forms:add')
    }, React.createElement(StyledButton$1, {
      hasInput: Boolean(input) ? 1 : 0,
      onClick: function onClick() {
        if (input) {
          helper.setValue([].concat(value, [input]));
          setInput('');
        }
      }
    }, React.createElement(PlusIcon, null)))),
    type: 'text',
    value: input,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    id: generateSlug(formName),
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 13 && Boolean(input)) {
        e.stopPropagation();
        e.preventDefault();
        helper.setValue([].concat(value, [input]));
        setInput('');
      }
    }
  })), React.createElement("div", null, value.map(function (val, ind) {
    return React.createElement(Chip, {
      color: 'primary',
      style: {
        margin: '5px'
      },
      onDelete: function onDelete() {
        var newArray = Array.from(value);
        newArray.splice(value.indexOf(val), 1);
        helper.setValue(newArray);
      },
      key: ind,
      label: val
    });
  })), React.createElement(FormHelperText, {
    variant: 'outlined'
  }, (_meta$error = meta.error) != null ? _meta$error : helperText)));
};

var TimeInput = function TimeInput(_ref) {
  var _meta$value;

  var name = _ref.name,
      index = _ref.index,
      subName = _ref.subName,
      label = _ref.label,
      helperText = _ref.helperText,
      required = _ref.required,
      disabled = _ref.disabled;

  var _useTranslation = useTranslation(),
      lang = _useTranslation.lang;

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  return React.createElement(DateTimeProvider, {
    lang: lang
  }, React.createElement(TimePicker, {
    value: (_meta$value = meta.value) != null ? _meta$value : null,
    onChange: function onChange(date) {
      return helper.setValue(date || null);
    },
    disabled: disabled,
    clearable: true,
    ampm: false,
    mask: '__:__',
    inputFormat: timeFormat,
    label: label,
    renderInput: function renderInput(props) {
      var _meta$error;

      return React.createElement(TextField$1, Object.assign({
        margin: 'dense'
      }, props, {
        variant: 'outlined',
        error: Boolean(meta.error),
        helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
        required: required,
        style: {
          width: '100%'
        },
        id: generateSlug(formName)
      }));
    }
  }));
};

var _templateObject$8, _templateObject2$3, _templateObject3$2, _templateObject4$2, _templateObject5$2;
var StyledRow = /*#__PURE__*/styled(TableRow)(_templateObject$8 || (_templateObject$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  cursor: ", ";\n"])), function (_ref) {
  var hover = _ref.hover;
  return hover && 'pointer';
});
var NoRecords = /*#__PURE__*/styled.tr(_templateObject2$3 || (_templateObject2$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 18px;\n  display: table;\n  position: absolute;\n  margin: 20px auto;\n  left: 0;\n  right: 0;\n"])));
var StyledTableBody = /*#__PURE__*/styled(TableBody)(_templateObject3$2 || (_templateObject3$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @media (max-width: 1023px) {\n    tr {\n      :nth-child(even) {\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.background["default"];
});
var StyledCell = /*#__PURE__*/styled(TableCell)(_templateObject4$2 || (_templateObject4$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-weight: bold !important;\n  background-color: ", " !important;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.background.paper;
});
var StyledContainer = /*#__PURE__*/styled(TableContainer)(_templateObject5$2 || (_templateObject5$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  overflow: auto;\n  width: 100%;\n"])));

var Table = function Table(_ref4) {
  var _state$globalFilter;

  var columns = _ref4.columns,
      data = _ref4.data,
      actions = _ref4.actions,
      onRowClick = _ref4.onRowClick,
      withSearch = _ref4.withSearch,
      selected = _ref4.selected,
      maxHeight = _ref4.maxHeight,
      style = _ref4.style,
      labelledBy = _ref4.labelledBy;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var _useTable = useTable({
    columns: columns,
    data: data != null ? data : []
  }, useGlobalFilter, useSortBy, function (hooks) {
    hooks.allColumns.push(function (columns) {
      return [].concat(columns, actions ? actions : []);
    });
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow,
      state = _useTable.state,
      setGlobalFilter = _useTable.setGlobalFilter;

  var array = useMemo(function () {
    return new Array(10).fill('blah');
  }, []);
  return React.createElement(React.Fragment, null, withSearch && React.createElement(TextField$1, {
    style: {
      width: '100%',
      margin: '15px 0'
    },
    variant: 'outlined',
    label: t('common:search'),
    value: (_state$globalFilter = state.globalFilter) != null ? _state$globalFilter : '',
    onChange: function onChange(e) {
      return setGlobalFilter(e.target.value);
    },
    InputProps: {
      endAdornment: React.createElement(React.Fragment, null, state.globalFilter && React.createElement(InputAdornment, {
        position: 'end'
      }, React.createElement(Tooltip, {
        title: t('common:clear')
      }, React.createElement(IconButton, {
        onClick: function onClick() {
          return setGlobalFilter('');
        }
      }, React.createElement(ClearIcon, null)))), React.createElement(InputAdornment, {
        position: 'end'
      }, React.createElement(SearchIcon, null)))
    }
  }), React.createElement(StyledContainer, {
    style: _extends({
      maxHeight: maxHeight
    }, style)
  }, React.createElement(MaUTable, Object.assign({
    "aria-labelledby": labelledBy,
    stickyHeader: true
  }, getTableProps()), React.createElement(TableHead, null, headerGroups.map(function (headerGroup, ind) {
    return React.createElement(TableRow, Object.assign({
      key: ind
    }, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) {
      return React.createElement(StyledCell, Object.assign({
        key: column.id
      }, column.getHeaderProps()), React.createElement(TableSortLabel, Object.assign({
        hideSortIcon: true,
        active: column.isSorted,
        direction: column.isSortedDesc ? 'desc' : 'asc'
      }, column.getSortByToggleProps()), column.render('Header')));
    }));
  })), !Boolean(data) ? React.createElement(StyledTableBody, Object.assign({}, getTableBodyProps()), array.map(function (row) {
    return React.createElement(TableRow, {
      key: row.id
    }, columns.map(function (col, ind) {
      return React.createElement(TableCell, {
        key: ind
      }, React.createElement(Skeleton, {
        variant: 'text'
      }));
    }));
  })) : rows.length > 0 ? React.createElement(StyledTableBody, Object.assign({}, getTableBodyProps()), rows.map(function (row) {
    prepareRow(row);
    return React.createElement(StyledRow, Object.assign({
      selected: selected === row.id,
      hover: Boolean(onRowClick),
      onClick: function onClick() {
        return onRowClick && onRowClick(row);
      },
      key: row.id
    }, row.getRowProps()), row.cells.map(function (cell, ind) {
      return React.createElement(TableCell, Object.assign({
        key: ind
      }, cell.getCellProps()), cell.render('Cell'));
    }));
  })) : React.createElement("tbody", {
    style: {
      height: 60,
      position: 'relative'
    }
  }, React.createElement(NoRecords, null, t('table:noRecords'))))));
};

var _templateObject$9, _templateObject2$4, _templateObject3$3, _templateObject4$3;
var AccordionsWrapper = /*#__PURE__*/styled.div(_templateObject$9 || (_templateObject$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin: 10px 0;\n"])));
var SelectedValue = /*#__PURE__*/styled.span(_templateObject2$4 || (_templateObject2$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin: 0 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var OptionTitle = /*#__PURE__*/styled.span(_templateObject3$3 || (_templateObject3$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 18px;\n  font-weight: bold;\n  color: ", ";\n"])), function (_ref) {
  var error = _ref.error;
  return error && '#f44336';
});
var StyledContent = /*#__PURE__*/styled(AccordionSummary)(_templateObject4$3 || (_templateObject4$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  .MuiAccordionSummary-content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));

var ConsumableInput = function ConsumableInput(_ref2) {
  var options = _ref2.options,
      label = _ref2.label,
      name = _ref2.name,
      helperText = _ref2.helperText,
      required = _ref2.required,
      columns = _ref2.columns;

  var _useState = useState(options.map(function (v, ind) {
    return ind === 0;
  })),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var _useField = useField(name),
      meta = _useField[1],
      helpers = _useField[2];

  return React.createElement(FormControl, {
    error: Boolean(meta.error),
    required: required,
    style: {
      width: '100%'
    }
  }, React.createElement(FormLabel, {
    htmlFor: generateSlug(name)
  }, label), React.createElement(AccordionsWrapper, {
    id: generateSlug(name)
  }, options.map(function (option, ind) {
    var currentValue = meta.value.find(function (value) {
      return option.options.some(function (o) {
        return o.id === value.inventoryId;
      });
    });
    return React.createElement(Accordion, {
      key: ind,
      expanded: expanded[ind],
      onChange: function onChange() {
        var newArray = Array.from(expanded);
        newArray[ind] = !newArray[ind];
        setExpanded(newArray);
      }
    }, React.createElement(StyledContent, {
      expandIcon: React.createElement(ExpandMoreIcon, null)
    }, React.createElement(OptionTitle, {
      error: Boolean(meta.error) && Boolean(meta.error[ind])
    }, option.title), React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, Boolean(currentValue) && columns.map(function (column) {
      return React.createElement(SelectedValue, null, React.createElement("span", {
        style: {
          fontWeight: 'bold',
          marginBottom: 10
        }
      }, column.Header), typeof column.accessor === 'string' ? getObjectKeyByString(currentValue, column.accessor) : column.accessor(currentValue));
    })), Boolean(meta.error) && Boolean(meta.error[ind]) && React.createElement("span", {
      style: {
        color: '#f44336'
      }
    }, meta.error[ind]), React.createElement("div", null)), React.createElement(AccordionDetails, null, React.createElement(Table, {
      style: {
        margin: '10px 0'
      },
      maxHeight: 400,
      onRowClick: function onRowClick(row) {
        if (Boolean(currentValue)) {
          var newValueArray = Array.from(meta.value);
          newValueArray.splice(newValueArray.findIndex(function (val) {
            return Boolean(option.options.find(function (o) {
              return o.id === val.inventoryId;
            }));
          }), 1);
          helpers.setValue([].concat(newValueArray, [{
            inventoryId: row.original.id,
            amount: option.amount,
            product: row.original.product
          }]));
        } else {
          helpers.setValue([].concat(meta.value, [{
            inventoryId: row.original.id,
            amount: option.amount,
            product: row.original.product
          }]));
        }

        var newArray = Array.from(expanded);
        newArray[ind] = false;

        if (newArray.length > ind + 1) {
          newArray[ind + 1] = true;
        }

        setExpanded(newArray);
      },
      data: option.options,
      columns: columns
    })));
  })), helperText && React.createElement(FormHelperText, null, helperText));
};

var DimensionsInput = function DimensionsInput(_ref) {
  var lengthUnit = _ref.lengthUnit,
      name = _ref.name,
      index = _ref.index,
      required = _ref.required;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var _useFormikContext = useFormikContext(),
      values = _useFormikContext.values,
      setFieldValue = _useFormikContext.setFieldValue;

  return React.createElement(FormControl, {
    required: required,
    style: {
      width: '100%'
    }
  }, React.createElement(FormLabel, {
    htmlFor: generateSlug(name),
    style: {
      marginBottom: 20
    }
  }, t('table:dimensions')), React.createElement(SameLine, {
    id: generateSlug(name)
  }, React.createElement(NumberInput, {
    allowDecimals: true,
    index: index,
    subName: typeof index === 'number' && 'height',
    name: typeof index === 'number' ? name : 'height',
    onChange: function onChange(e) {
      if (e.target.value === '') {
        setFieldValue(typeof index === 'number' ? name + "." + index + ".depth" : 'depth', '');
        setFieldValue(typeof index === 'number' ? name + "." + index + ".width" : 'width', '');
      }
    },
    label: t('table:height'),
    InputProps: {
      endAdornment: React.createElement(InputAdornment, {
        position: 'end'
      }, lengthUnit, ".")
    }
  }), React.createElement(NumberInput, {
    index: index,
    disabled: !Boolean(typeof index === 'number' ? values[name][index].height : values.height),
    allowDecimals: true,
    onChange: function onChange(e) {
      if (e.target.value === '') {
        setFieldValue(typeof index === 'number' ? name + "." + index + ".depth" : 'depth', '');
      }
    },
    subName: typeof index === 'number' && 'width',
    name: typeof index === 'number' ? name : 'width',
    label: t('table:width'),
    InputProps: {
      endAdornment: React.createElement(InputAdornment, {
        position: 'end'
      }, lengthUnit, ".")
    }
  }), React.createElement(NumberInput, {
    index: index,
    disabled: !Boolean(typeof index === 'number' ? values[name][index].width : values.width),
    allowDecimals: true,
    subName: typeof index === 'number' && 'depth',
    name: typeof index === 'number' ? name : 'depth',
    label: t('table:depth'),
    InputProps: {
      endAdornment: React.createElement(InputAdornment, {
        position: 'end'
      }, lengthUnit, ".")
    }
  })));
};

var _templateObject$a, _templateObject2$5, _templateObject3$4, _templateObject4$4;
var EntityField = /*#__PURE__*/styled.div(_templateObject$a || (_templateObject$a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n"])));
var Wrapper$2 = /*#__PURE__*/styled(FormControl)(_templateObject2$5 || (_templateObject2$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin: 20px !important;\n\n  @media (max-width: 767px) {\n    width: 100% !important;\n  }\n"])));
var LabelWrapper = /*#__PURE__*/styled.div(_templateObject3$4 || (_templateObject3$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n"])));
var StyledLabel = /*#__PURE__*/styled(FormLabel)(_templateObject4$4 || (_templateObject4$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  && {\n    color: ", ";\n    font-size: 24px;\n    font-weight: bolder;\n  }\n\n  .Mui-disabled {\n    color: ", ";\n  }\n\n  .Mui-focused {\n    color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.disabled;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
});

var EntitySelect = function EntitySelect(_ref4) {
  var label = _ref4.label,
      helperText = _ref4.helperText,
      values = _ref4.values,
      name = _ref4.name,
      disabled = _ref4.disabled;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var _useField = useField(name),
      meta = _useField[1],
      helper = _useField[2];

  var handleSelect = function handleSelect(value) {
    if (meta.value.includes(value)) {
      helper.setValue(removeFromArray([value], meta.value));
    } else {
      helper.setValue([].concat(meta.value, [value]));
    }
  };

  var handleSelectAll = function handleSelectAll() {
    if (values.every(function (val) {
      return meta.value.includes(val.value);
    })) {
      helper.setValue(removeFromArray(values.map(function (val) {
        return val.value;
      }), meta.value));
    } else {
      var missingValues = values.filter(function (val) {
        return !meta.value.includes(val.value);
      }).map(function (val) {
        return val.value;
      });
      helper.setValue([].concat(meta.value, missingValues));
    }
  };

  return React.createElement(Wrapper$2, {
    disabled: disabled
  }, React.createElement(LabelWrapper, null, React.createElement(StyledLabel, null, label), React.createElement(FormControlLabel, {
    style: {
      marginLeft: '10px'
    },
    label: values.every(function (val) {
      return meta.value.includes(val.value);
    }) ? t('forms:unselectAll') : t('forms:selectAll'),
    control: React.createElement(Checkbox$1, {
      onChange: handleSelectAll,
      checked: values.every(function (val) {
        return meta.value.includes(val.value);
      })
    })
  })), React.createElement(FormGroup, null, values.map(function (innerValue) {
    return React.createElement(EntityField, {
      style: innerValue.helperText ? {
        margin: '10px 0'
      } : {},
      key: innerValue.label
    }, React.createElement(FormControlLabel, {
      label: React.createElement(React.Fragment, null, innerValue.label, innerValue.helperText && React.createElement(FormHelperText, null, innerValue.helperText)),
      control: React.createElement(Checkbox$1, {
        onChange: function onChange() {
          return handleSelect(innerValue.value);
        },
        checked: meta.value.includes(innerValue.value)
      })
    }));
  })), helperText && React.createElement(FormHelperText, null, helperText));
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

var _templateObject$b, _templateObject2$6, _templateObject3$5, _templateObject4$5, _templateObject5$3, _templateObject6$2, _templateObject7$2, _templateObject8$2;
var PreviewsWrapper = /*#__PURE__*/styled.div(_templateObject$b || (_templateObject$b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var UploadPreview = /*#__PURE__*/styled.img(_templateObject2$6 || (_templateObject2$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 180px;\n  width: auto;\n"])));
var StyledIcon = /*#__PURE__*/styled(DeleteIcon)(_templateObject3$5 || (_templateObject3$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute !important;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 35px;\n  height: 35px;\n  opacity: 0;\n  transition: all linear 0.2s;\n  z-index: 2;\n"])));
var hoverStyles = /*#__PURE__*/css(_templateObject4$5 || (_templateObject4$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  :hover {\n    ", " {\n      opacity: 1;\n    }\n    ::after {\n      opacity: 0.4;\n    }\n  }\n"])), StyledIcon);
var PreviewWrapper = /*#__PURE__*/styled.div(_templateObject5$3 || (_templateObject5$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid black;\n  margin: 10px;\n"])));
var ImagePreviewWrapper = /*#__PURE__*/styled.div(_templateObject6$2 || (_templateObject6$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: relative;\n  cursor: pointer;\n  transition: all linear 0.2s;\n  padding: 10px 10px 0 10px;\n\n  ::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: ", ";\n    opacity: 0;\n    transition: all 0.2s;\n  }\n\n  ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
}, function (_ref2) {
  var isdeleting = _ref2.isdeleting;
  return isdeleting === 1 && hoverStyles;
});
var FullScreenImage = /*#__PURE__*/styled.img(_templateObject7$2 || (_templateObject7$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: fixed;\n  width: auto;\n  height: 95%;\n  top: 2.5%;\n"])));
var OrderChange = /*#__PURE__*/styled.div(_templateObject8$2 || (_templateObject8$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n"])));

var ImageViewer = function ImageViewer(_ref3) {
  var images = _ref3.images,
      onDelete = _ref3.onDelete,
      onOrderChange = _ref3.onOrderChange;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var _useState = useState(null),
      isFullScreen = _useState[0],
      setIsFullScreen = _useState[1];

  return React.createElement(React.Fragment, null, React.createElement(PreviewsWrapper, null, images.sort(function (a, b) {
    return a.order - b.order;
  }).map(function (image, index) {
    return React.createElement(PreviewWrapper, null, React.createElement(ImagePreviewWrapper, {
      isdeleting: onDelete ? 1 : 0,
      onClick: function onClick() {
        return onDelete ? onDelete(image) : setIsFullScreen(image);
      },
      key: index
    }, React.createElement(UploadPreview, {
      src: image != null && image.name ? URL.createObjectURL(image) : image.url
    }), onDelete && React.createElement(StyledIcon, {
      fontSize: 'large'
    })), onOrderChange && images && React.createElement(OrderChange, null, React.createElement(Tooltip, {
      title: t('common:back')
    }, React.createElement(IconButton, {
      disabled: image != null && image.name ? index === 0 : image.order === 0,
      onClick: function onClick() {
        var newArray = Array.from(images);

        if (image.name) {
          var temp = newArray[index];
          newArray[index] = newArray[index - 1];
          newArray[index - 1] = temp;
        } else {
          newArray[index].order = newArray[index - 1].order;
          newArray[index - 1].order = newArray[index - 1].order + 1;
        }

        onOrderChange(newArray);
      }
    }, React.createElement(ArrowBackIcon, null))), image != null && image.name ? index + 1 : image.order + 1, ".", React.createElement(Tooltip, {
      title: t('common:forward')
    }, React.createElement(IconButton, {
      disabled: image != null && image.name ? index === images.length - 1 : image.order === images.length - 1,
      onClick: function onClick() {
        var newArray = Array.from(images);

        if (image.name) {
          var temp = newArray[index];
          newArray[index] = newArray[index + 1];
          newArray[index + 1] = temp;
        } else {
          newArray[index].order = newArray[index + 1].order;
          newArray[index + 1].order = newArray[index + 1].order - 1;
        }

        onOrderChange(newArray);
      }
    }, React.createElement(ArrowForwardIcon, null)))));
  })), isFullScreen && React.createElement(Backdrop, {
    style: {
      margin: 0,
      zIndex: 99999
    },
    onClick: function onClick() {
      return setIsFullScreen(null);
    },
    open: true
  }, React.createElement(FullScreenImage, {
    src: isFullScreen != null && isFullScreen.name ? URL.createObjectURL(isFullScreen) : isFullScreen.url
  })));
};

var _templateObject$c, _templateObject2$7, _templateObject3$6, _templateObject4$6, _templateObject5$4;
var Dropzone = /*#__PURE__*/styled.div(_templateObject$c || (_templateObject$c = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  border: 2px dashed;\n  background-color: ", ";\n  padding: 80px;\n  margin: 20px;\n  cursor: pointer;\n\n  svg {\n    margin-right: 10px;\n  }\n\n  @media (max-width: 767px) {\n    padding: 20px;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.background.paper;
});
var UploadDescription = /*#__PURE__*/styled.div(_templateObject2$7 || (_templateObject2$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n"])));
var SupportedFormats = /*#__PURE__*/styled.span(_templateObject3$6 || (_templateObject3$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: gray;\n  font-size: 14px;\n  width: 50%;\n"])));
var StyledIcon$1 = /*#__PURE__*/styled(CloudUploadIcon)(_templateObject4$6 || (_templateObject4$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 80px !important;\n  margin-top: 20px;\n"])));
var UploadText = /*#__PURE__*/styled.span(_templateObject5$4 || (_templateObject5$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 20px;\n"])));

var FileUpload = function FileUpload(_ref2) {
  var onUpload = _ref2.onUpload,
      supportedFormats = _ref2.supportedFormats,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? false : _ref2$multiple,
      id = _ref2.id;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var onDrop = useCallback(function (acceptedFiles) {
    onUpload(acceptedFiles);
  }, []);

  var _useDropzone = useDropzone({
    onDrop: onDrop,
    multiple: multiple
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  return React.createElement(React.Fragment, null, React.createElement(Dropzone, Object.assign({
    id: id
  }, getRootProps()), React.createElement("input", Object.assign({}, getInputProps())), React.createElement(UploadDescription, null, React.createElement(UploadText, null, isDragActive ? t('forms:importUploadDrop') : t('forms:importUploadInfo')), React.createElement(StyledIcon$1, null))), supportedFormats && React.createElement(SupportedFormats, null, t('forms:supportedFormats') + supportedFormats));
};

var _templateObject$d;
var UploadWrapper = /*#__PURE__*/styled(FormControl)(_templateObject$d || (_templateObject$d = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  margin: 10px 0 !important;\n"])));

var FileInput = function FileInput(_ref) {
  var _meta$value;

  var name = _ref.name,
      multiple = _ref.multiple,
      label = _ref.label,
      index = _ref.index,
      subName = _ref.subName,
      onDelete = _ref.onDelete,
      isImages = _ref.isImages,
      required = _ref.required,
      onReOrder = _ref.onReOrder;
  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helpers = _useField[2];

  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(file) {
      var newFiles, _newFiles;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(file != null && file.name)) {
                _context.next = 4;
                break;
              }

              if (multiple) {
                newFiles = Array.from(meta.value);
                helpers.setValue(newFiles.filter(function (innerFile) {
                  return innerFile.name !== file.name;
                }));
              } else {
                helpers.setValue(undefined);
              }

              _context.next = 7;
              break;

            case 4:
              _context.next = 6;
              return onDelete(file.id);

            case 6:
              if (multiple) {
                _newFiles = Array.from(meta.value);
                helpers.setValue(_newFiles.filter(function (innerFile) {
                  return innerFile.id !== (file == null ? void 0 : file.id);
                }));
              } else {
                helpers.setValue(undefined);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleOrderChange = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(files) {
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              helpers.setValue(files);

              if (files.every(function (file) {
                return file.name;
              })) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return onReOrder(files.map(function (_ref4) {
                var order = _ref4.order,
                    id = _ref4.id;
                return {
                  order: order,
                  id: id
                };
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleOrderChange(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return React.createElement(UploadWrapper, {
    required: required
  }, React.createElement(FormLabel, {
    htmlFor: generateSlug(formName)
  }, label), (multiple || !meta.value) && React.createElement(FileUpload, {
    id: generateSlug(formName),
    multiple: multiple,
    onUpload: function onUpload(files) {
      helpers.setValue(multiple ? [].concat(Array.from(files), meta.value) : files[0]);
    }
  }), (multiple && (meta == null ? void 0 : (_meta$value = meta.value) == null ? void 0 : _meta$value.length) > 0 || meta.value) && React.createElement(React.Fragment, null, isImages ? React.createElement(ImageViewer, {
    onOrderChange: multiple && handleOrderChange,
    images: multiple ? meta.value : [meta.value],
    onDelete: handleDelete
  }) : React.createElement(DocumentViewer, {
    canDownload: false,
    onDelete: handleDelete,
    documents: multiple ? meta.value : [meta.value]
  })));
};

var _templateObject$e, _templateObject2$8;
var StyledSelect = /*#__PURE__*/styled(Select)(_templateObject$e || (_templateObject$e = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 24px !important;\n  height: 30px !important;\n  margin-left: 5px;\n\n  ::before {\n    border-bottom: none !important;\n  }\n\n  .MuiSelect-select {\n    display: flex;\n  }\n"])));
var Flag = /*#__PURE__*/styled.img(_templateObject2$8 || (_templateObject2$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 25px;\n  width: auto;\n"])));

var LanguageSelect = function LanguageSelect(_ref) {
  var allLanguages = _ref.allLanguages;
  var router = useRouter();

  var _useTranslation = useTranslation(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var changeLanguage = function changeLanguage(lng) {
    router.push(router.pathname, router.asPath, {
      locale: lng
    });
  };

  return React.createElement(StyledSelect, {
    value: lang,
    onChange: function onChange(e) {
      return changeLanguage(e.target.value);
    }
  }, allLanguages.includes('es') && React.createElement(MenuItem, {
    value: 'es'
  }, React.createElement(Flag, {
    alt: t('common:spanish'),
    src: '/flag_es.png'
  })), allLanguages.includes('en') && React.createElement(MenuItem, {
    value: 'en'
  }, React.createElement(Flag, {
    alt: t('common:english'),
    src: '/flag_en.png'
  })), allLanguages.includes('pt') && React.createElement(MenuItem, {
    value: 'pt'
  }, React.createElement(Flag, {
    alt: t('common:portuguese'),
    src: '/flag_pt.png'
  })), allLanguages.includes('de') && React.createElement(MenuItem, {
    value: 'de'
  }, React.createElement(Flag, {
    alt: t('common:german'),
    src: '/flag_de.png'
  })));
};

var _templateObject$f, _templateObject2$9, _templateObject3$7, _templateObject4$7, _templateObject5$5;
var StyledDialogContent = /*#__PURE__*/styled(DialogContent)(_templateObject$f || (_templateObject$f = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  > *:not(label) {\n    margin: 8px 0;\n  }\n\n  > button {\n    margin: 20px 0;\n  }\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 767px) {\n    min-width: 767px;\n  }\n"])));
var HelperText = /*#__PURE__*/styled.span(_templateObject2$9 || (_templateObject2$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  align-self: flex-start;\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.secondary;
});
var StyledButton$2 = /*#__PURE__*/styled(Button)(_templateObject3$7 || (_templateObject3$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @media (max-width: 767px) {\n    width: 50%;\n  }\n"])));
var StyledSubmit = /*#__PURE__*/styled(SubmitButton)(_templateObject4$7 || (_templateObject4$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @media (max-width: 767px) {\n    width: 50%;\n  }\n"])));
var CreateButton = /*#__PURE__*/styled(Button)(_templateObject5$5 || (_templateObject5$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  align-self: flex-start;\n  margin: 10px 0 !important;\n\n  @media (max-width: 767px) {\n    padding: 20px;\n    width: 100% !important;\n  }\n"])));

var MultiCreate = function MultiCreate(_ref2) {
  var children = _ref2.children,
      fields = _ref2.fields,
      name = _ref2.name,
      formatFunction = _ref2.formatFunction,
      title = _ref2.title,
      onDelete = _ref2.onDelete,
      schema = _ref2.schema,
      helperText = _ref2.helperText,
      onOpen = _ref2.onOpen,
      validate = _ref2.validate,
      label = _ref2.label,
      required = _ref2.required,
      initialValues = _ref2.initialValues;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var _useState = useState(false),
      isCreating = _useState[0],
      setIsCreating = _useState[1];

  var _useState2 = useState(''),
      isUpdating = _useState2[0],
      setIsUpdating = _useState2[1];

  var _useFormikContext = useFormikContext(),
      setFieldError = _useFormikContext.setFieldError,
      validateField = _useFormikContext.validateField;

  var _useField = useField(name),
      meta = _useField[1],
      helper = _useField[2];

  var tableData = useMemo(function () {
    if (isCreating) {
      var data = Array.from(meta.value);
      data.pop();
      return data;
    } else {
      return meta.value;
    }
  }, [isCreating, meta.value]);

  var handleClose = function handleClose() {
    if (isCreating) {
      var newArray = Array.from(meta.value);
      newArray.pop();
      helper.setValue(newArray, true);
      setIsCreating(false);
    } else {
      var validateRes = validate && validate(meta.value[isUpdating]);

      if (validateRes) {
        return setFieldError(name + "[" + isUpdating + "]", validateRes);
      }

      schema.validate(meta.value[isUpdating]).then(function () {
        setIsUpdating('');
        validateField(name);
      })["catch"](function (error) {
        setFieldError(name + "[" + isUpdating + "]." + error.path, error.message);
      });
    }
  };

  var handleSubmit = function handleSubmit() {
    var index = isCreating ? meta.value.length - 1 : isUpdating;
    var validateRes = validate && validate(meta.value[index]);

    if (validateRes) {
      return setFieldError(name + "[" + index + "]", validateRes);
    }

    schema.validate(meta.value[index]).then(function () {
      isCreating ? setIsCreating(false) : setIsUpdating('');
      validateField(name);
    })["catch"](function (error) {
      console.log(error);
      setFieldError(name + "[" + index + "]." + error.path, error.message);
    });
  };

  return React.createElement("div", {
    style: {
      width: '100%'
    }
  }, React.createElement(FormControl, {
    required: required,
    style: {
      alignSelf: 'flex-start',
      margin: '20px 0',
      width: '100%'
    }
  }, React.createElement(FormLabel, {
    style: {
      marginBottom: 10
    }
  }, label), tableData.length > 0 && React.createElement(React.Fragment, null, React.createElement(Table, {
    columns: fields.map(function (field) {
      return {
        accessor: field.name,
        Header: field.label
      };
    }),
    data: formatFunction ? formatFunction(tableData) : tableData,
    actions: [{
      id: 'actions',
      Header: t('forms:actions'),
      Cell: function Cell(_ref3) {
        var row = _ref3.row;
        return React.createElement(React.Fragment, null, React.createElement(Tooltip, {
          title: t('forms:edit')
        }, React.createElement(IconButton, {
          onClick: function onClick() {
            var newArray = Array.from(tableData);
            var item = newArray.splice(row.index, 1);
            newArray.push(item[0]);
            helper.setValue(newArray);
            setIsUpdating(row.index);
          }
        }, React.createElement(EditIcon, null))), React.createElement(Tooltip, {
          title: t('forms:delete')
        }, React.createElement(IconButton, {
          onClick: function onClick() {
            var _tableData$row$index;

            if ((_tableData$row$index = tableData[row.index]) != null && _tableData$row$index.id) {
              onDelete(tableData[row.index].id);
            } else {
              var updatedData = Array.from(tableData);
              updatedData.splice(row.index, 1);
              helper.setValue(updatedData);
            }
          }
        }, React.createElement(DeleteIcon, null))));
      }
    }]
  })), React.createElement(CreateButton, {
    variant: 'contained',
    color: 'secondary',
    type: 'button',
    size: 'large',
    style: meta.error ? {
      backgroundColor: '#f44336'
    } : {},
    onClick: function onClick() {
      setIsCreating(true);

      if (onOpen) {
        onOpen(meta.value.length);
      } else {
        helper.setValue([].concat(meta.value, [initialValues ? _extends({}, initialValues) : {}]));
      }
    }
  }, React.createElement(PlusIcon$1, {
    style: {
      margin: '0 5px 0 -5px'
    }
  }), title), (meta.error || helperText) && React.createElement(FormHelperText, {
    error: Boolean(meta.error)
  }, meta.error ? getErrorMessage(meta.error) : helperText)), React.createElement(Dialog, {
    disableEnforceFocus: true,
    open: isCreating || isUpdating !== '',
    onClose: handleClose,
    id: generateSlug(title),
    "aria-labelledby": generateSlug(title) + "-label",
    maxWidth: 'xl'
  }, React.createElement(DialogTitle, {
    style: {
      paddingBottom: 0
    },
    id: generateSlug(title) + "-label"
  }, title), React.createElement(StyledDialogContent, {
    id: generateSlug(title) + "-content"
  }, helperText && React.createElement(HelperText, null, helperText), children), React.createElement(DialogActions, null, React.createElement(StyledButton$2, {
    type: 'button',
    onClick: handleClose
  }, t('forms:cancel')), React.createElement(StyledSubmit, {
    onClick: handleSubmit
  }, t('forms:submit')))));
};

var _templateObject$g, _templateObject2$a, _templateObject3$8, _templateObject4$8;
var PermissionsWrapper = /*#__PURE__*/styled.div(_templateObject$g || (_templateObject$g = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n"])));
var LabelWrapper$1 = /*#__PURE__*/styled.div(_templateObject2$a || (_templateObject2$a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n"])));
var StyledDivider = /*#__PURE__*/styled(Divider)(_templateObject3$8 || (_templateObject3$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  align-self: normal;\n"])));
var StyledLabel$1 = /*#__PURE__*/styled(FormLabel)(_templateObject4$8 || (_templateObject4$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  && {\n    color: ", ";\n    font-size: 24px;\n    font-weight: bolder;\n  }\n\n  .Mui-disabled {\n    color: ", ";\n  }\n\n  .Mui-focused {\n    color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.disabled;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
});

var PermissionSelect = function PermissionSelect(_ref4) {
  var permissions = _ref4.permissions,
      name = _ref4.name;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var _useField = useField(name),
      meta = _useField[1],
      helper = _useField[2];

  var sortedPermissions = permissions == null ? void 0 : permissions.reduce(function (prev, next) {
    var _extends2;

    var splitted = next.name.split(':');
    return _extends({}, prev, (_extends2 = {}, _extends2[splitted[1]] = prev[splitted[1]] ? [].concat(prev[splitted[1]], [splitted[0]]) : [splitted[0]], _extends2));
  }, {});

  var handleSelect = function handleSelect(permission) {
    if (!meta.value.includes(permission)) {
      var splitted = permission.split(':');

      if (splitted[0] !== 'read' && !meta.value.includes("read:" + splitted[1])) {
        helper.setValue([].concat(meta.value, ["read:" + splitted[1], permission]));
      } else {
        helper.setValue([].concat(meta.value, [permission]));
      }
    } else {
      helper.setValue(removeFromArray([permission], meta.value));
    }
  };

  var handleSelectAll = function handleSelectAll(values, group) {
    if (values.every(function (val) {
      return meta.value.includes(val + ":" + group);
    })) {
      helper.setValue(removeFromArray(values.map(function (val) {
        return val + ":" + group;
      }), meta.value));
    } else {
      var missingValues = values.filter(function (val) {
        return !meta.value.includes(val + ":" + group);
      }).map(function (val) {
        return val + ":" + group;
      });
      helper.setValue([].concat(meta.value, missingValues));
    }
  };

  var strings = [t('forms:create'), t('forms:read'), t('forms:update'), t('forms:import'), t('forms:export'), t('forms:delete')];
  return React.createElement(PermissionsWrapper, null, Object.keys(sortedPermissions).map(function (pName) {
    return React.createElement("div", {
      key: pName,
      style: {
        width: '100%'
      }
    }, React.createElement(FormControl, {
      style: {
        margin: '20px 40px'
      }
    }, React.createElement(LabelWrapper$1, null, React.createElement(StyledLabel$1, null, " ", t("common:" + pName)), React.createElement(FormControlLabel, {
      style: {
        marginLeft: '10px'
      },
      label: sortedPermissions[pName].every(function (val) {
        return meta.value.includes(val.value);
      }) ? t('forms:unselectAll') : t('forms:selectAll'),
      control: React.createElement(Checkbox$1, {
        onChange: function onChange() {
          return handleSelectAll(sortedPermissions[pName], pName);
        },
        checked: sortedPermissions[pName].every(function (val) {
          return meta.value.includes(val + ":" + pName);
        })
      })
    })), React.createElement(FormGroup, null, sortedPermissions[pName].map(function (permission) {
      return React.createElement(FormControlLabel, {
        key: permission + ":" + pName,
        label: t("forms:" + permission),
        control: React.createElement(Checkbox$1, {
          onChange: function onChange() {
            return handleSelect(permission + ":" + pName);
          },
          checked: meta.value.includes(permission + ":" + pName)
        })
      });
    }))), React.createElement(StyledDivider, null));
  }));
};

var _templateObject$h;
var PhoneWrapper = /*#__PURE__*/styled.div(_templateObject$h || (_templateObject$h = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: inline-flex !important;\n  width: 100% !important;\n  flex-direction: row !important;\n"])));

var PhoneInput = function PhoneInput(_ref) {
  var _meta$error;

  var name = _ref.name,
      helperText = _ref.helperText,
      label = _ref.label,
      required = _ref.required,
      index = _ref.index,
      subName = _ref.subName,
      prefixName = _ref.prefixName,
      prefixSubName = _ref.prefixSubName;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;
  var prefixFormName = typeof index === 'number' && prefixSubName ? prefixName + "[" + index + "]." + prefixSubName : prefixName;

  var _useField = useField(formName),
      meta = _useField[1],
      helper = _useField[2];

  var _useField2 = useField(prefixFormName),
      prefixMeta = _useField2[1],
      prefixHelper = _useField2[2];

  return React.createElement(PhoneWrapper, {
    id: generateSlug(formName) + "-group"
  }, React.createElement(TextField, {
    style: {
      width: '170px',
      alignSelf: 'flex-end',
      marginRight: '20px'
    },
    required: required,
    value: prefixMeta.value,
    onChange: function onChange(e) {
      return prefixHelper.setValue(e.target.value);
    },
    fullWidth: true,
    id: generateSlug(prefixFormName),
    label: t('forms:prefix'),
    InputProps: {
      startAdornment: React.createElement(InputAdornment, {
        position: 'start'
      }, "+")
    },
    error: Boolean(meta.error),
    inputMode: 'numeric',
    type: 'text',
    variant: 'outlined',
    margin: 'dense',
    onKeyDown: function onKeyDown(e) {
      //delete, tab, etc
      if ([8, 9, 37, 39].includes(e.keyCode)) {
        return;
      } //number keys


      if (e.keyCode >= 48 && e.keyCode <= 57) {
        return;
      } //numpad


      if (e.keyCode >= 96 && e.keyCode <= 105) {
        return;
      }

      e.preventDefault();
    }
  }), React.createElement(TextField, {
    id: generateSlug(formName),
    inputMode: 'numeric',
    type: 'text',
    variant: 'outlined',
    margin: 'dense',
    onKeyDown: function onKeyDown(e) {
      //delete, tab, etc
      if ([8, 9, 37, 39].includes(e.keyCode)) {
        return;
      } //number keys


      if (e.keyCode >= 48 && e.keyCode <= 57) {
        return;
      } //numpad


      if (e.keyCode >= 96 && e.keyCode <= 105) {
        return;
      }

      e.preventDefault();
    },
    label: label,
    value: meta.value,
    onChange: function onChange(e) {
      helper.setValue(e.target.value);
    },
    helperText: (_meta$error = meta.error) != null ? _meta$error : helperText,
    error: Boolean(meta.error),
    style: {
      width: '100%'
    },
    required: required
  }));
};

var _templateObject$i;
var KeyWrapper = /*#__PURE__*/styled.span(_templateObject$i || (_templateObject$i = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-size: 18px;\n  svg {\n    margin-right: 5px;\n  }\n"])));

var Infos = function Infos(_ref) {
  var infos = _ref.infos,
      _ref$hideEmpty = _ref.hideEmpty,
      hideEmpty = _ref$hideEmpty === void 0 ? true : _ref$hideEmpty;
  var filteredInfos = useMemo(function () {
    return hideEmpty ? infos.filter(function (info) {
      return info.value !== '' && info.value !== null && info.value !== undefined;
    }) : infos;
  }, [infos]);
  return React.createElement(Table$1, {
    style: {
      width: 'initial'
    }
  }, React.createElement(TableBody, null, filteredInfos.map(function (_ref2) {
    var Icon = _ref2.Icon,
        name = _ref2.name,
        value = _ref2.value;
    return React.createElement(TableRow$1, {
      key: name
    }, React.createElement(TableCell$1, {
      style: {
        border: 'none'
      }
    }, Icon && React.createElement(Icon, null)), React.createElement(TableCell$1, {
      style: {
        textAlign: 'left',
        border: 'none',
        paddingRight: '10px'
      }
    }, React.createElement(KeyWrapper, null, name, ":")), React.createElement(TableCell$1, {
      style: {
        fontSize: 18,
        textAlign: 'left',
        border: 'none',
        fontWeight: 'bold'
      }
    }, value ? value : '-'));
  })));
};

var _templateObject$j, _templateObject2$b, _templateObject3$9;
var SelectedWrapper = /*#__PURE__*/styled(Paper)(_templateObject$j || (_templateObject$j = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0;\n  padding: 5px;\n"])));
var SelectedText = /*#__PURE__*/styled.span(_templateObject2$b || (_templateObject2$b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin: 0 10px;\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n"])));
var MobileSelectedWrapper = /*#__PURE__*/styled(Paper)(_templateObject3$9 || (_templateObject3$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  margin: 10px 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n\n  button {\n    align-self: flex-end;\n    margin: 10px 10px 0 0;\n  }\n"])));

var Selection = function Selection(_ref) {
  var columns = _ref.columns,
      onDelete = _ref.onDelete,
      value = _ref.value;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  var isMobile = !isServer$1 && window.matchMedia && window.matchMedia('(max-width: 767px)').matches;

  if (isMobile) {
    return React.createElement(MobileSelectedWrapper, null, React.createElement(Tooltip, {
      title: t('common:remove')
    }, React.createElement(IconButton, {
      style: {
        marginLeft: 20
      },
      onClick: function onClick() {
        return onDelete(value);
      }
    }, React.createElement(CancelIcon, {
      fontSize: 'large'
    }))), React.createElement(Infos, {
      infos: columns.map(function (column) {
        return {
          name: column.Header,
          value: typeof column.accessor === 'string' ? getObjectKeyByString(value, column.accessor) : column.accessor(value)
        };
      })
    }));
  }

  return React.createElement(SelectedWrapper, null, columns.map(function (column) {
    return React.createElement(SelectedText, {
      key: column.Header
    }, React.createElement("span", {
      style: {
        fontWeight: 'bold',
        marginBottom: 10
      }
    }, column.Header), typeof column.accessor === 'string' ? getObjectKeyByString(value, column.accessor) : column.accessor(value));
  }), React.createElement(Tooltip, {
    title: t('common:remove')
  }, React.createElement(IconButton, {
    style: {
      marginLeft: 20
    },
    onClick: function onClick() {
      return onDelete(value);
    }
  }, React.createElement(CancelIcon, {
    fontSize: 'large'
  }))));
};

var TableInput = function TableInput(_ref2) {
  var _meta$value;

  var name = _ref2.name,
      subName = _ref2.subName,
      index = _ref2.index,
      required = _ref2.required,
      label = _ref2.label,
      helperText = _ref2.helperText,
      options = _ref2.options,
      columns = _ref2.columns,
      multiple = _ref2.multiple,
      filterWith = _ref2.filterWith,
      withSearch = _ref2.withSearch;
  var formName = typeof index === 'number' && subName ? name + "[" + index + "]." + subName : name;

  var _useField = useField(formName),
      meta = _useField[1],
      helpers = _useField[2];

  useEffect(function () {
    if ((options == null ? void 0 : options.length) === 1) {
      helpers.setValue(options[1]);
    }
  }, [options]);
  var data = useMemo(function () {
    // if (!meta.value) return []
    return multiple ? options == null ? void 0 : options.filter(function (option) {
      if (filterWith && meta.value.length > 0 && getObjectKeyByString(option, filterWith) !== getObjectKeyByString(meta.value[0], filterWith)) {
        return false;
      }

      return !Boolean(meta.value.find(function (val) {
        return val.id === option.id;
      }));
    }) : options;
  }, [multiple, options, meta.value]);
  return React.createElement(FormControl, {
    style: {
      width: '100%',
      display: 'grid'
    },
    error: Boolean(meta.error),
    required: required
  }, React.createElement(FormLabel, {
    id: generateSlug(name) + "-input"
  }, label), !multiple && meta.value && React.createElement(Selection, {
    onDelete: function onDelete() {
      return helpers.setValue(null);
    },
    value: meta.value,
    columns: columns
  }), multiple && ((_meta$value = meta.value) == null ? void 0 : _meta$value.length) > 0 && meta.value.map(function (value, ind) {
    return React.createElement(Selection, {
      value: value,
      onDelete: function onDelete(v) {
        return helpers.setValue(removeFromObjectArray(meta.value, 'id', v.id));
      },
      key: ind,
      columns: columns
    });
  }), !Boolean(options) ? React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      margin: '10px 0'
    }
  }, React.createElement(CircularProgress, null)) : (multiple || !meta.value) && React.createElement(Table, {
    labelledBy: generateSlug(name) + "-input",
    withSearch: withSearch,
    style: {
      margin: '10px 0'
    },
    maxHeight: 400,
    onRowClick: function onRowClick(row) {
      return helpers.setValue(multiple ? [].concat(meta.value, [row.original]) : row.original);
    },
    data: data,
    columns: columns
  }), helperText && React.createElement(FormHelperText, null, meta.error ? getErrorMessage(meta.error) : helperText));
};

var _templateObject$k;
var Wrapper$3 = /*#__PURE__*/styled.div(_templateObject$k || (_templateObject$k = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n\n  > div:first-child {\n    width: 100%;\n  }\n"])));

var WithCreationOption = function WithCreationOption(_ref) {
  var children = _ref.children,
      _ref$canCreate = _ref.canCreate,
      canCreate = _ref$canCreate === void 0 ? true : _ref$canCreate,
      onCreate = _ref.onCreate,
      title = _ref.title;
  return React.createElement(Wrapper$3, null, children, canCreate && React.createElement(Tooltip, {
    placement: 'right',
    title: title
  }, React.createElement(Button, {
    "aria-label": title,
    style: {
      height: '56px',
      marginLeft: 10
    },
    variant: 'contained',
    color: 'secondary',
    size: 'large',
    onClick: onCreate
  }, React.createElement(PlusIcon$1, null))));
};

var _templateObject$l, _templateObject2$c, _templateObject3$a;
var StyledDialogContent$1 = /*#__PURE__*/styled(DialogContent)(_templateObject$l || (_templateObject$l = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @media (min-width: 767px) {\n    min-width: 767px;\n  }\n"])));
var StyledButton$3 = /*#__PURE__*/styled(Button)(_templateObject2$c || (_templateObject2$c = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @media (max-width: 767px) {\n    width: 50%;\n  }\n"])));
var StyledSubmit$1 = /*#__PURE__*/styled(SubmitButton)(_templateObject3$a || (_templateObject3$a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @media (max-width: 767px) {\n    width: 50%;\n  }\n"])));

var FormModal = function FormModal(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      _onClose = _ref.onClose,
      title = _ref.title,
      description = _ref.description,
      initialValues = _ref.initialValues,
      validationSchema = _ref.validationSchema,
      onSubmit = _ref.onSubmit,
      disabled = _ref.disabled,
      children = _ref.children,
      enableReinitialize = _ref.enableReinitialize,
      validate = _ref.validate,
      edit = _ref.edit,
      submitText = _ref.submitText;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement(Dialog, {
    disableEnforceFocus: true,
    maxWidth: 'xl',
    open: isOpen,
    onClose: function onClose() {
      return _onClose();
    },
    "aria-labelledby": generateSlug(title)
  }, React.createElement(DialogTitle, {
    id: generateSlug(title)
  }, title), React.createElement(Formik, {
    validateOnBlur: false,
    validateOnChange: false,
    validate: validate,
    enableReinitialize: enableReinitialize,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit
  }, function (_ref2) {
    var isSubmitting = _ref2.isSubmitting,
        errors = _ref2.errors;

    if (process.env.NODE_ENV === 'development' && Object.keys(errors).length > 0) {
      console.log('FormModalErrors: ', errors);
    }

    return React.createElement(StyledDialogContent$1, {
      id: generateSlug(title) + "-content"
    }, React.createElement(Form, null, description && React.createElement(DialogContentText, null, description), children, React.createElement(DialogActions, null, React.createElement(StyledButton$3, {
      size: 'large',
      type: 'button',
      onClick: function onClick() {
        return _onClose();
      },
      color: 'primary'
    }, t('common:cancel')), React.createElement(StyledSubmit$1, {
      size: 'large',
      loading: isSubmitting,
      disabled: disabled
    }, submitText ? submitText : edit ? t('common:update') : t('common:create')))));
  }));
};

var _templateObject$m, _templateObject2$d, _templateObject3$b, _templateObject4$9, _templateObject5$6, _templateObject6$3;
var leftAlignedStyles = /*#__PURE__*/css(_templateObject$m || (_templateObject$m = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: calc(100% / 3 * 2);\n  margin-right: calc(100% / 3 * 1 + 40px);\n"])));
var CenterStyles = /*#__PURE__*/css(_templateObject2$d || (_templateObject2$d = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 10px;\n"])));
var StyledPaper$1 = /*#__PURE__*/styled(Paper)(_templateObject3$b || (_templateObject3$b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  padding: 10px 20px;\n  margin: 10px;\n  max-width: 960px;\n\n  @media (min-width: 767px) {\n    ", ";\n  }\n"])), function (_ref) {
  var isleftaligned = _ref.isleftaligned;
  return isleftaligned === 1 ? leftAlignedStyles : CenterStyles;
});
var Header$1 = /*#__PURE__*/styled.div(_templateObject4$9 || (_templateObject4$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n"])));
var PageWrapper$1 = /*#__PURE__*/styled.div(_templateObject5$6 || (_templateObject5$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n"])));
var StyledSubmit$2 = /*#__PURE__*/styled(SubmitButton)(_templateObject6$3 || (_templateObject6$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  @media (max-width: 767px) {\n    padding: 20px 0;\n    width: 100%;\n  }\n"])));

var FormPage = function FormPage(_ref2) {
  var title = _ref2.title,
      initialValues = _ref2.initialValues,
      validationSchema = _ref2.validationSchema,
      validate = _ref2.validate,
      children = _ref2.children,
      onSubmit = _ref2.onSubmit,
      edit = _ref2.edit,
      multiCreationLink = _ref2.multiCreationLink,
      singleCreationLink = _ref2.singleCreationLink,
      isLeftAligned = _ref2.isLeftAligned,
      style = _ref2.style,
      enableReinitialize = _ref2.enableReinitialize,
      hideSubmit = _ref2.hideSubmit,
      submitText = _ref2.submitText,
      _ref2$withRequiredNot = _ref2.withRequiredNotice,
      withRequiredNotice = _ref2$withRequiredNot === void 0 ? true : _ref2$withRequiredNot;

  var _useTranslation = useTranslation(),
      t = _useTranslation.t;

  return React.createElement(PageWrapper$1, {
    style: style
  }, React.createElement(StyledPaper$1, {
    isleftaligned: isLeftAligned ? 1 : 0,
    elevation: 2
  }, React.createElement(Header$1, null, React.createElement(Title, null, title), multiCreationLink && React.createElement(Link$1, {
    passHref: true,
    href: multiCreationLink
  }, React.createElement(Button, {
    color: 'primary'
  }, t('common:multiCreation'))), singleCreationLink && React.createElement(Link$1, {
    passHref: true,
    href: singleCreationLink
  }, React.createElement(Button, {
    color: 'primary'
  }, t('common:singleCreation')))), withRequiredNotice && React.createElement("span", {
    style: {
      display: 'block',
      padding: '10px 0'
    }
  }, t('forms:requiredNotice')), React.createElement(Formik, {
    enableReinitialize: enableReinitialize,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: initialValues,
    validationSchema: validationSchema,
    validate: validate,
    onSubmit: onSubmit
  }, function (_ref3) {
    var isSubmitting = _ref3.isSubmitting,
        errors = _ref3.errors,
        values = _ref3.values;

    if (Object.keys(errors).length > 0) {
      console.log(errors);
    }

    isDev && console.log(values);
    return React.createElement(Form, null, children, !hideSubmit && React.createElement(StyledSubmit$2, {
      type: 'submit',
      loading: isSubmitting,
      size: 'large'
    }, Boolean(submitText) ? submitText : edit ? t('common:update') : t('common:create')));
  })));
};

var IconButtonLink = function IconButtonLink(_ref) {
  var href = _ref.href,
      as = _ref.as,
      title = _ref.title,
      children = _ref.children,
      onClick = _ref.onClick;
  return React.createElement(Link$1, {
    passHref: true,
    href: href,
    as: as
  }, React.createElement(ABlank$1, null, React.createElement(Tooltip, {
    title: title
  }, React.createElement(IconButton, {
    onClick: onClick
  }, children))));
};

var isServer = typeof window === 'undefined';
var useScrollPosition = function useScrollPosition() {
  var _useState = useState(0),
      topDistance = _useState[0],
      setTopDistance = _useState[1];

  var setTopDistanceEvent = function setTopDistanceEvent() {
    setTopDistance(window.pageYOffset);
  };

  useEffect(function () {
    document.addEventListener('scroll', setTopDistanceEvent);
    return function () {
      document.removeEventListener('scroll', setTopDistanceEvent);
    };
  }, []);
  return topDistance;
};
var useDebounce = function useDebounce(value, delay) {
  var _useState2 = useState(value),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  useEffect(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
var useIsMobile = function useIsMobile(initialWidth, initialHeight) {
  if (initialWidth === void 0) {
    initialWidth = Infinity;
  }

  if (initialHeight === void 0) {
    initialHeight = Infinity;
  }

  var _useState3 = useState({
    width: !isServer ? window.innerWidth : initialWidth,
    height: !isServer ? window.innerHeight : initialHeight
  }),
      state = _useState3[0],
      setState = _useState3[1];

  useEffect(function () {
    if (!isServer) {
      var handler = function handler() {
        setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handler);
      return function () {
        window.removeEventListener('resize', handler);
      };
    }
  }, []);
  return state.width < 767;
};
var handleResponse = function handleResponse(_ref) {
  var setNotification = _ref.setNotification,
      error = _ref.error,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      response = _ref.response,
      success = _ref.success,
      t = _ref.t;

  if (response.error) {
    var result = {
      state: 'error',
      message: error
    };
    errors.push({
      message: t('common:duplicateDataError'),
      trigger: 'already exists'
    }, {
      message: t('common:duplicateDataError'),
      trigger: 'Unique constraint failed'
    }, {
      message: t('common:inUseError'),
      trigger: 'violate the required relation'
    }, {
      message: t('common:notAuthorizedError'),
      trigger: 'Not Authorised'
    });
    errors.forEach(function (_ref2) {
      var _response$error;

      var message = _ref2.message,
          trigger = _ref2.trigger,
          callback = _ref2.callback;

      if ((response == null ? void 0 : (_response$error = response.error) == null ? void 0 : _response$error.message.indexOf(trigger)) !== -1) {
        result = {
          state: 'error',
          message: message
        };

        if (callback) {
          callback();
        }
      }
    });
    setNotification(result);
    return false;
  } else if (success) {
    setNotification({
      state: 'success',
      message: success
    });
    return true;
  } else {
    return true;
  }
};

export { ABlank$1 as ABlank, AddressInput, BoldText, BooleanIcon, ButtonGroup, Checkbox, ColorInput, ComboBox, ConsumableInput, DarkmodeSwitch, DateInput, DateTimeInput, DateTimeProvider, DimensionsInput, DocumentViewer, EmailInput, EntitySelect, FileInput, FileUpload, Footer, Form, FormModal, FormPage, Header, IconButtonLink, ImageViewer, Info, LanguageSelect, Link, Loader, MultiCombobox, MultiCreate, NumberInput, PageWrapper, PasswordInput, PermissionSelect, PhoneInput, SameLine, SelectInput, StyledPaper, SubmitButton, Table, TableInput, TextAreaInput, TextInput, TextListInput, TimeInput, Title, WithCreationOption, getTheme, handleResponse, isServer, useDebounce, useIsMobile, useScrollPosition };
//# sourceMappingURL=inventhora-components.esm.js.map
