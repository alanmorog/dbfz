# proyecto pagina para dbfz


## actividad

- cada colaborador debe crear una rama para hacer los cambios, se trabaja sobre el index.html de la raiz y sobre la carpeta javascript


#### Para crear una Rama propia es

```
git branch

```

#### crea la rama y la selecciona por defecto
```
git checkout -b nombre-de-mi-rama

```

-Aquí, nombre-de-mi-rama es el nombre que elijas para tu rama. Este comando crea la rama y cambia a ella.

#### Realiza Cambios y Commits

```
git add <archivo>
git commit -m "Descripción de los cambios"
```

#### Sube tu Rama al Repositorio Remoto:

```
git push origin nombre-de-mi-rama
```

## Colaborar en Paralelo con Varias Personas
- Mientras trabajas en paralelo con otras personas, ten en cuenta lo siguiente:
#### Sincronizar con la Rama Principal:

-Regularmente, asegúrate de que tu rama esté actualizada con los cambios de la rama principal para evitar conflictos:

```
git checkout main  # O la rama principal en tu repositorio
git pull origin main
```
-Resuelve cualquier conflicto si aparece, y luego haz un commit si es necesario.
```
git push origin nombre-de-mi-rama

```

-Sincronizar con la Rama Principal
```
git merge main
```

#### Solicitar una Revisión de Código o Pull Request:
-Cuando tus cambios estén listos para ser integrados en la rama principal, crea un Pull Request (PR) o Merge Request (MR) en la plataforma que uses (GitHub, GitLab, Bitbucket, etc.). Esto permite que otros revisen tus cambios antes de fusionarlos.



